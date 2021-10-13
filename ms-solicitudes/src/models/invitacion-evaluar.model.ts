import {Entity, model, property} from '@loopback/repository';

@model()
export class InvitacionEvaluar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdInvitacionEvaluar?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdSolicitud: number;

  @property({
    type: 'number',
    required: true,
  })
  IdJurado: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaInvitacion: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaRespuesta: string;

  @property({
    type: 'string',
    required: true,
  })
  EstadoInvitacion: string;

  @property({
    type: 'string',
    required: true,
  })
  ObservacionesInvitacionEvaluar: string;


  constructor(data?: Partial<InvitacionEvaluar>) {
    super(data);
  }
}

export interface InvitacionEvaluarRelations {
  // describe navigational properties here
}

export type InvitacionEvaluarWithRelations = InvitacionEvaluar & InvitacionEvaluarRelations;
