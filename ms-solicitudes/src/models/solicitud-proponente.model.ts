import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudProponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdSolicitudProponente?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdProponente: number;

  @property({
    type: 'number',
    required: true,
  })
  IdSolicitud: number;


  constructor(data?: Partial<SolicitudProponente>) {
    super(data);
  }
}

export interface SolicitudProponenteRelations {
  // describe navigational properties here
}

export type SolicitudProponenteWithRelations = SolicitudProponente & SolicitudProponenteRelations;
