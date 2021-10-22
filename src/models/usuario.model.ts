import {Entity, model, property, hasOne, belongsTo} from '@loopback/repository';
import {Rol} from './rol.model';

@model({
  settings: {
    foreignKeys: {
      fk_user_idRol: {
        name: 'fk_user_idRol',
        entity: 'Rol',
        entityKey: '_idRol',
        foreignKey: 'idRol',
      }
    },
  },
})
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _idUsuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombresUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidosUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  documentoUsuario: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimientoUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  emailUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  direccionUsuario: string;

  @property({
    type: 'string',
    required: true,
  })
  celularUsuario: string;

  @property({
    type: 'string',
    default: 0,
  })
  telefonoUsuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoUsuario: string;

  @belongsTo(() => Rol, {name: 'tiene_un'})
  idRol: string;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
