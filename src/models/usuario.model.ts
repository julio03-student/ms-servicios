import {Entity, model, property, hasOne} from '@loopback/repository';
import {Rol} from './rol.model';

@model()
export class Usuario extends Entity {
  @property({
    type: 'number',
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

  @hasOne(() => Rol, {keyTo: 'idRol'})
  tiene_un: Rol;

  @property({
    type: 'number',
  })
  rolId?: number;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
