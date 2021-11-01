import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model()
export class Modalidad extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdModalidad?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreModalidad: string;

  @hasMany(() => Solicitud, {keyTo: 'IdModalidad'})
  solicitudes: Solicitud[];

  constructor(data?: Partial<Modalidad>) {
    super(data);
  }
}

export interface ModalidadRelations {
  // describe navigational properties here
}

export type ModalidadWithRelations = Modalidad & ModalidadRelations;
