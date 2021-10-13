import {Entity, model, property} from '@loopback/repository';

@model()
export class Recordatorio extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdRecordatorio?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdInvitacionEvaluar: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaRecordatorio: string;

  @property({
    type: 'date',
    required: true,
  })
  HoraRecordatorio: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoRecordatorio: string;

  @property({
    type: 'string',
    required: true,
  })
  DescripcionRecordatorio: string;


  constructor(data?: Partial<Recordatorio>) {
    super(data);
  }
}

export interface RecordatorioRelations {
  // describe navigational properties here
}

export type RecordatorioWithRelations = Recordatorio & RecordatorioRelations;
