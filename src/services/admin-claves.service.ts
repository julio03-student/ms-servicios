import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Credenciales, CredencialesRecuperarPassword, Usuario} from '../models';
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

  async CambiarClave(credencialesClave: CambiarClave): Promise<Usuario | null>{
    let usuario = await this.usuarioRepository.findOne({
      where: {
        emailUsuario: credencialesClave.email,
        clave: credencialesClave.claveActual
      }
    })
    if(usuario){
      usuario.clave = credencialesClave.claveNueva
      await this.usuarioRepository.updateById(usuario._idUsuario, usuario)
      return usuario
    } else{
      return null;
    }
  }

}
