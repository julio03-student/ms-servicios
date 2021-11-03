import {AuthenticationStrategy} from '@loopback/authentication';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import parseBearerToken from 'parse-bearer-token'
import {restore} from 'sinon';
import {Keys} from '../config/keys';
const fetch = require('node-fetch')

export class EstrategiaAdminStrategy implements AuthenticationStrategy {
  name: string = 'admin';

  constructor(

  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request)
    if (token) {
      let url = `${Keys.urlValidarToken}?${Keys.argToken}=${token}&${Keys.argRolValidar}=${Keys.rolAdmin}`
      let respuesta = ""
      await fetch(url)
        .then(async (res: any) => {
          respuesta = await res.text()
        })
      switch (respuesta) {
        case "OK":
          let perfil : UserProfile = Object.assign({
            admin: "OK"
          })
          return perfil
          break;
        case "KO":
          throw new HttpErrors[401]("Tiene un token válido, pero el rol no corresponde")
          break;
        case "":
          throw new HttpErrors[401]("El token no es válido")
          break;
        default:
          break;
      }
    } else {
      throw new HttpErrors[401]("La solicitud no posee un token")
    }

  }

}
