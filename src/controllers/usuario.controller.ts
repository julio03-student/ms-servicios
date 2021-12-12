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
import {Credenciales, CredencialesRecuperarPassword, FormatoCorreo, NotificacionEmail, NotificacionSms, Usuario} from '../models';
import {CambiarClave} from '../models/cambiar-clave.model';
import {UsuarioRepository} from '../repositories';
import {AdminClavesService, NotificacionesService, SesionUsuariosService} from '../services';

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @service(AdminClavesService)
    public servicioClaves: AdminClavesService,
    @service(NotificacionesService)
    public servicioNotificaciones: NotificacionesService,
    @service(SesionUsuariosService)
    private servicioSesionUsuario: SesionUsuariosService
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
    console.log('creando user')
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


  @post('/identificar-usuario')
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
  ): Promise<object | null> {
    let usuario = await this.servicioSesionUsuario.IdentificarUsuario(credenciales)
    let tk = ""
    if (usuario) {
      usuario.clave = ""
      tk = await this.servicioSesionUsuario.GenerarToken(usuario)
    }
    return {
      token: tk,
      usuario: usuario
    }
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
    console.log('Enviando EMAIL');
    let usuario = await this.servicioClaves.CambiarClave(credencialesClave)
    if(usuario){
      let datos = new NotificacionEmail();
      datos.destinatario = usuario.emailUsuario;
      datos.asunto = Configuracion.asuntoCambio;
      datos.mensaje = `Hola ${usuario.nombresUsuario} <br/> ${Configuracion.mensajeCambioClave}`
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
    credenciales: CredencialesRecuperarPassword,
  ): Promise<Usuario | null> {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: credenciales.correo
      }
    })
    if(usuario){
      let clave = this.servicioClaves.CrearClaveAleatoria();
      let claveCifrada = this.servicioClaves.CifrarTexto(clave);
      usuario.clave = this.servicioClaves.CifrarTexto(clave)
      await this.usuarioRepository.updateById(usuario._idUsuario, usuario)
      console.log(clave)

      let datos = new NotificacionSms();
      datos.destino = usuario.celularUsuario;
      datos.mensaje = `Hola ${usuario.nombresUsuario} <br/> ${Configuracion.mensajeRecuperarPassword} ${clave}`
      this.servicioNotificaciones.EnviarSms(datos);

    }
    return usuario
  }

  @post('/formato-correo')
  @response(200, {
    description: 'Recuperar clave de usuarios',
    content: {'application/json': {schema: {}}},
  })
  async enviarEmail(
    @requestBody({
      content: {
        'application/json': {}
      },
    })
    credenciales: FormatoCorreo,
  ): Promise<NotificacionEmail | null> {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: credenciales.correo
      }
    })

    let email = new NotificacionEmail();

    if(usuario){
      email.asunto = credenciales.asunto
      email.destinatario = usuario.emailUsuario
      email.mensaje = `Cordial saludo ${usuario.nombresUsuario} ${credenciales.mensaje}`
      this.servicioNotificaciones.EnviarCorreo(email)
    }
    return email
  }

}
