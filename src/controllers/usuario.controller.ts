import {service} from '@loopback/core/dist/service';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { Configuracion } from '../llaves/configuracion';
import {Credenciales, NotificacionEmail, Usuario} from '../models';
import {CambiarClave} from '../models/cambiar-clave.model';
import {UsuarioRepository} from '../repositories';
import {AdminClavesService, NotificacionesService} from '../services';

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @service(AdminClavesService)
    public servicioClaves: AdminClavesService,
    @service(NotificacionesService)
    public servicioNotificaciones: NotificacionesService
  ) { }

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['_idUsuario'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, '_idUsuario'>,
  ): Promise<Usuario> {
    let clave = this.servicioClaves.CrearClaveAleatoria()
    console.log(clave);
    let claveCifrada = this.servicioClaves.CifrarTexto(clave)
    usuario.clave = claveCifrada
    let usuarioCreado = await this.usuarioRepository.create(usuario)
    if (usuarioCreado) {
      let datos = new NotificacionEmail();
      datos.destinatario = usuario.emailUsuario;
      datos.asunto = Configuracion.asuntoCrearUser;
      datos.mensaje = `Hola ${usuario.nombresUsuario} <br/> ${Configuracion.mensajeCrearUser}  ${clave}` 
      this.servicioNotificaciones.EnviarCorreo(datos);
      this.servicioNotificaciones.EnviarCorreo(datos);
    }
    return usuarioCreado
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }

  ///Métodos adicionales


  @post('/identificar-usuarios')
  @response(200, {
    description: 'identificación del usuario',
    content: {'application/json': {schema: getModelSchemaRef(Credenciales)}},
  })
  async identificarUsuarios(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Credenciales, {
            title: 'identificarUsuario'
          }),
        },
      },
    })
    credenciales: Credenciales
  ): Promise<Usuario | null> {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: credenciales.usuario,
        clave: credenciales.clave
      }
    })
    if (usuario) {
      usuario.clave = ""
    }
    return usuario
  }

  @post('/cambiar-clave')
  @response(200, {
    description: 'Cambio de clave de usuarios',
    content: {'application/json': {schema: getModelSchemaRef(CambiarClave)}},
  })
  async cambiarClave(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CambiarClave, {
            title: 'Cambio de clave del usuario'
          }),
        },
      },
    })
    credencialesClave: CambiarClave
  ): Promise<Boolean> {
    let usuario = await this.servicioClaves.CambiarClave(credencialesClave)
    if(usuario){
      let datos = new NotificacionEmail();
      datos.destinatario = usuario.emailUsuario;
      datos.asunto = Configuracion.asuntoCambio;
      datos.mensaje = `Hola ${usuario.nombresUsuario} <br/> ${Configuracion.mensajeCambioClave}` 
      this.servicioNotificaciones.EnviarCorreo(datos);
      this.servicioNotificaciones.EnviarCorreo(datos);
    }
    return usuario != null;
  }

  @post('/recuperar-clave')
  @response(200, {
    description: 'Recuperar clave de usuarios',
    content: {'application/json': {schema: {}}},
  })
  async recuperarClave(
    @requestBody({
      content: {
        'application/json': {}
      },
    })
    correo: string
  ): Promise<Usuario | null> {
    let usuario = await this.servicioClaves.RecuperarClave(correo)
    if(usuario){
      /// Enviar correo al usuario
    }
    return usuario
  }

}
