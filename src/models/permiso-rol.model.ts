import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_permisoRol_idRol: {
        name: 'fk_permisoRol_idRol',
        entity: 'Rol',
        entityKey: '_idRol',
        foreignKey: 'idRol',
      },
      fk_permisoRol_idPermiso: {
        name: 'fk_permisoRol_idPermiso',
        entity: 'Permiso',
        entityKey: '_idPermiso',
        foreignKey: 'idPermiso',
      }
    },
  },
}
)
export class PermisoRol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
  })
  idRol?: string;

  @property({
    type: 'string',
  })
  idPermiso?: string;

  constructor(data?: Partial<PermisoRol>) {
    super(data);
  }
}

export interface PermisoRolRelations {
  // describe navigational properties here
}

export type PermisoRolWithRelations = PermisoRol & PermisoRolRelations;
