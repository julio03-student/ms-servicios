import {Entity, model, property} from '@loopback/repository';

@model()
export class Jurado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdJurado?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  TelefonoJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  CorreoJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  VinculacionJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  ClaveJurado: string;


  constructor(data?: Partial<Jurado>) {
    super(data);
  }
}

export interface JuradoRelations {
  // describe navigational properties here
}

export type JuradoWithRelations = Jurado & JuradoRelations;
