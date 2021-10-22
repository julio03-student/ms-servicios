import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Credenciales, Usuario} from '../models';
import {CambiarClave} from '../models/cambiar-clave.model';
import {UsuarioRepository} from '../repositories';
const generator = require('generate-password')
const CryptoJS = require('crypto-js')

@injectable({scope: BindingScope.TRANSIENT})
export class AdminClavesService {
  constructor(@repository(UsuarioRepository)
  public usuarioRepository: UsuarioRepository) { }

  CrearClaveAleatoria(): string{
    let password = generator.generate({
      length: 8,
      numbers: true,
      uppercase: true
    })
    return password
  }

  CifrarTexto(texto: string){
    let textoCifrado = CryptoJS.MD5(texto).toString()
    return textoCifrado
  }

  async CambiarClave(credencialesClave: CambiarClave): Promise<Boolean>{
    let usuario = await this.usuarioRepository.findOne({
      where: {
        _idUsuario: credencialesClave.id_usuario,
        clave: credencialesClave.claveActual
      }
    })
    if(usuario){
      usuario.clave = credencialesClave.claveNueva
      await this.usuarioRepository.updateById(credencialesClave.id_usuario, usuario)
      return true
    } else{
      return false
    }
  }

  async RecuperarClave(correo: string): Promise<Usuario | null>{
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: correo
      }
    })
    if(usuario){
      let clave = this.CrearClaveAleatoria()
      usuario.clave = this.CifrarTexto(clave)
      await this.usuarioRepository.updateById(usuario._idUsuario, usuario)
      ///Notificar la nueva contraseña
      return usuario
    } else{
      return null
    }
  }

}
