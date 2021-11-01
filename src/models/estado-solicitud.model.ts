import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class EstadoSolicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdEstadoSolicitud?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreEstadoSolicitud: string;

  @hasMany(() => Solicitud, {keyTo: 'IdEstado'})
  solicitudes: Solicitud[];

  constructor(data?: Partial<EstadoSolicitud>) {
    super(data);
  }
}

export interface EstadoSolicitudRelations {
  // describe navigational properties here
}

export type EstadoSolicitudWithRelations = EstadoSolicitud & EstadoSolicitudRelations;
