import {Model, model, property} from '@loopback/repository';

@model()
export class Arreglolineadeinvestigacion extends Model {
  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  lineas_investigacion: number[];


  constructor(data?: Partial<Arreglolineadeinvestigacion>) {
    super(data);
  }
}

export interface ArreglolineadeinvestigacionRelations {
  // describe navigational properties here
}

export type ArreglolineadeinvestigacionWithRelations = Arreglolineadeinvestigacion & ArreglolineadeinvestigacionRelations;
