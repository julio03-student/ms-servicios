import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<EstadoSolicitud>) {
    super(data);
  }
}

export interface EstadoSolicitudRelations {
  // describe navigational properties here
}

export type EstadoSolicitudWithRelations = EstadoSolicitud & EstadoSolicitudRelations;
