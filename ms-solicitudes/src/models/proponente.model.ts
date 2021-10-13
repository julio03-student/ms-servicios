import {Entity, model, property} from '@loopback/repository';

@model()
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
  })
  OtrosNombresProponente?: string;

  @property({
    type: 'string',
    required: true,
  })
  PrimerApellidoProponente: string;

  @property({
    type: 'string',
    required: true,
  })
  SegundoApellidoProponente: string;

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
    type: 'number',
    required: true,
  })
  IdTipoVinculacion: number;

  @property({
    type: 'string',
    required: true,
  })
  FotografiaProponente: string;


  constructor(data?: Partial<Proponente>) {
    super(data);
  }
}

export interface ProponenteRelations {
  // describe navigational properties here
}

export type ProponenteWithRelations = Proponente & ProponenteRelations;
