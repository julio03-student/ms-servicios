import {Entity, model, property} from '@loopback/repository';

@model()
export class Comite extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdComite?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreComite: string;


  constructor(data?: Partial<Comite>) {
    super(data);
  }
}

export interface ComiteRelations {
  // describe navigational properties here
}

export type ComiteWithRelations = Comite & ComiteRelations;
