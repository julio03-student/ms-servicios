import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { Configuracion } from '../llaves/configuracion';
import { NotificacionEmail } from '../models';
const fetch = require('node-fetch');

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) {}

  EnviarCorreo(datos: NotificacionEmail){
    let url = `${Configuracion.ulrEmail}?destino=${datos.destinatario}&asunto=${datos.asunto}&mensaje=${datos.mensaje}&hash=${Configuracion.hashNotification}`;
    fetch(url)
    .then((res: any) => {
      console.log(res.text());
    })
  }
}
