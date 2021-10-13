import {Entity, model, property} from '@loopback/repository';

@model()
export class CorreoNoticaciones extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  DireccionCorreo: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreCorreo: string;


  constructor(data?: Partial<CorreoNoticaciones>) {
    super(data);
  }
}

export interface CorreoNoticacionesRelations {
  // describe navigational properties here
}

export type CorreoNoticacionesWithRelations = CorreoNoticaciones & CorreoNoticacionesRelations;
