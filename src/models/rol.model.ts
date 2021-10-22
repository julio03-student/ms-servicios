import {Entity, model, property, hasMany} from '@loopback/repository';
import {Usuario} from './usuario.model';
import {Permiso} from './permiso.model';
import {PermisoRol} from './permiso-rol.model';

@model()
export class Rol extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _idRol?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombreRol: string;

  @property({
    type: 'string',
    required: true,
  })
  permisos: string[];

  @hasMany(() => Usuario)
  usuarios: Usuario[];

  @hasMany(() => Permiso, {through: {model: () => PermisoRol, keyFrom: 'idRol', keyTo: 'idPermiso'}})
  tiene_permisos: Permiso[];

  constructor(data?: Partial<Rol>) {
    super(data);
  }
}

export interface RolRelations {
  // describe navigational properties here
}

export type RolWithRelations = Rol & RolRelations;
