import {Entity, model, property} from '@loopback/repository';

@model()
export class Facultad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdFacultad?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreFacultad: string;

  @property({
    type: 'string',
    required: true,
  })
  CodigoFacultad: string;


  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
