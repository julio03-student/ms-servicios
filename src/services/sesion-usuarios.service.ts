import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Configuracion} from '../llaves/configuracion';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const fetch = require('node-fetch')

@injectable({scope: BindingScope.TRANSIENT})
export class SesionUsuariosService {
  constructor(
    @repository(UsuarioRepository)
    private usuarioRepository: UsuarioRepository
  ) {}

  async IdentificarUsuario(credenciales: Credenciales){
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: credenciales.usuario,
        clave: credenciales.clave
      }
    })
    return usuario
  }

  async GenerarToken(datos: Usuario): Promise<string>{
    let url = `${Configuracion.urlCrearToken}?${Configuracion.argNombre}=${datos.nombresUsuario}&${Configuracion.argId}=${datos._idUsuario}&${Configuracion.argRol}=${datos.idRol}`;
    let token = ""
    await fetch(url)
    .then(async (res: any) => {
      token = await res.text()
    })
    return token
  }
}
