import {Model, model, property} from '@loopback/repository';

@model()
export class FormatoCorreo extends Model {
  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  asunto: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;


  constructor(data?: Partial<FormatoCorreo>) {
    super(data);
  }
}

export interface FormatoCorreoRelations {
  // describe navigational properties here
}

export type FormatoCorreoWithRelations = FormatoCorreo & FormatoCorreoRelations;
