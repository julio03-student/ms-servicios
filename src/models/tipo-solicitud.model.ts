import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class TipoSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdTipoSolicitud?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreTipoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  DescripcionTipoSolicitud: string;

  @hasMany(() => Solicitud, {keyTo: 'IdTipoSolicitud'})
  solicitudes: Solicitud[];

  constructor(data?: Partial<TipoSolicitud>) {
    super(data);
  }
}

export interface TipoSolicitudRelations {
  // describe navigational properties here
}

export type TipoSolicitudWithRelations = TipoSolicitud & TipoSolicitudRelations;
