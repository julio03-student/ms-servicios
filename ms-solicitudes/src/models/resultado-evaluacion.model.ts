import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdResultadoEvaluacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdInvitacionEvaluar: number;

  @property({
    type: 'string',
    required: true,
  })
  DescripcionResultadoEvaluacion: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaResultadoEvaluacion: string;

  @property({
    type: 'string',
    required: true,
  })
  FormatoDiligenciado: string;


  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
