import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Facultad} from './facultad.model';

@model({
  settings: {
    foreignKeys: {
      fk_departamento_IdFacultad: {
        name: 'fk_departamento_IdFacultad',
        entity: 'Facultad',
        entityKey: 'IdFacultad',
        foreignKey: 'IdFacultad',
      }
    },
  },
})
export class Departamento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdDepartamento?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreDepartamento: string;

  @belongsTo(() => Facultad, {name: 'tiene_facultad'})
  IdFacultad: number;

  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
