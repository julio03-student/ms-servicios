import {Entity, model, property, belongsTo} from '@loopback/repository';
import {InvitacionEvaluar} from './invitacion-evaluar.model';

@model(/*/{
  settings: {
    foreignKeys: {
      fk_resultadoEvaluacion_IdInvitacionEvaluar: {
        name: 'fk_resultadoEvaluacion_IdInvitacionEvaluar',
        entity: 'InvitacionEvaluar',
        entityKey: 'IdInvitacionEvaluar',
        foreignKey: 'IdInvitacionEvaluar',
      }
    },
  },
}/*/)
export class ResultadoEvaluacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdResultadoEvaluacion?: number;
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

  @belongsTo(() => InvitacionEvaluar, {name: 'tiene_invitacion'})
  IdInvitacionEvaluar: number;

  constructor(data?: Partial<ResultadoEvaluacion>) {
    super(data);
  }
}

export interface ResultadoEvaluacionRelations {
  // describe navigational properties here
}

export type ResultadoEvaluacionWithRelations = ResultadoEvaluacion & ResultadoEvaluacionRelations;
