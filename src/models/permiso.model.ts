import {Entity, model, property} from '@loopback/repository';

@model()
export class Permiso extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _idPermiso?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombrePermiso: string;

  constructor(data?: Partial<Permiso>) {
    super(data);
  }
}

export interface PermisoRelations {
  // describe navigational properties here
}

export type PermisoWithRelations = Permiso & PermisoRelations;
