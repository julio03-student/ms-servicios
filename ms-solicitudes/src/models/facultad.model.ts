import {Entity, model, property, hasMany} from '@loopback/repository';
import {Departamento} from './departamento.model';

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

  @hasMany(() => Departamento, {keyTo: 'IdFacultad'})
  departamentos: Departamento[];

  constructor(data?: Partial<Facultad>) {
    super(data);
  }
}

export interface FacultadRelations {
  // describe navigational properties here
}

export type FacultadWithRelations = Facultad & FacultadRelations;
