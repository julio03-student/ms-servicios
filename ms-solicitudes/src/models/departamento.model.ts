import {Entity, model, property} from '@loopback/repository';

@model()
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

  @property({
    type: 'number',
    required: true,
  })
  IdFacultad: number;


  constructor(data?: Partial<Departamento>) {
    super(data);
  }
}

export interface DepartamentoRelations {
  // describe navigational properties here
}

export type DepartamentoWithRelations = Departamento & DepartamentoRelations;
