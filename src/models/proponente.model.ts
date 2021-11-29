import {Entity, model, property, belongsTo, hasMany, hasOne} from '@loopback/repository';
import {TipoVinculacion} from './tipo-vinculacion.model';
import {Departamento} from './departamento.model';
import {ProponenteDepartamento} from './proponente-departamento.model';
import {Imagen} from './imagen.model';

@model({
  settings: {
    foreignKeys: {
      fk_proponente_IdTipoVinculacion: {
        name: 'fk_proponente_IdTipoVinculacion',
        entity: 'TipoVinculacion',
        entityKey: 'IdTipoVinculacion',
        foreignKey: 'IdTipoVinculacion',
      }
    },
  },
})
export class Proponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdProponente?: number;

  @property({
    type: 'string',
    required: true,
  })
  PrimerNombreProponente: string;

  @property({
    type: 'string',
    required: false,
  })
  OtrosNombresProponente?: string;

  @property({
    type: 'string',
    required: true,
  })
  ApellidosProponente: string;

  @property({
    type: 'string',
    required: true,
  })
  DocumentoIdProponente: string;

  @property({
    type: 'string',
    required: true,
  })
  CorreoProponente: string;

  @property({
    type: 'string',
    required: true,
  })
  CelularProponente: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @belongsTo(() => TipoVinculacion, {name: 'tiene_tipoVinculacion'})
  IdTipoVinculacion: number;

  @hasMany(() => Departamento, {through: {model: () => ProponenteDepartamento, keyFrom: 'IdProponente', keyTo: 'IdDepartamento'}})
  departamentos: Departamento[];

  @hasOne(() => Imagen, {keyTo: 'IdProponente'})
  imagen: Imagen;

  constructor(data?: Partial<Proponente>) {
    super(data);
  }
}

export interface ProponenteRelations {
  // describe navigational properties here
}

export type ProponenteWithRelations = Proponente & ProponenteRelations;
