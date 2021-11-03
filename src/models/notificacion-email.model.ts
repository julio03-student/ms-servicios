import {Model, model, property} from '@loopback/repository';

@model()
export class NotificacionEmail extends Model {
  @property({
    type: 'string',
    required: true,
  })
  destinatario: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  @property({
    type: 'string',
    required: true,
  })
  asunto: string;


  constructor(data?: Partial<NotificacionEmail>) {
    super(data);
  }
}

export interface NotificacionEmailRelations {
  // describe navigational properties here
}

export type NotificacionEmailWithRelations = NotificacionEmail & NotificacionEmailRelations;
