import {Model, model, property} from '@loopback/repository';

@model()
export class CredencialesRecuperarPassword extends Model {
  @property({
    type: 'string',
    required: true,
  })
  correo: string;


  constructor(data?: Partial<CredencialesRecuperarPassword>) {
    super(data);
  }
}

export interface CredencialesRecuperarPasswordRelations {
  // describe navigational properties here
}

export type CredencialesRecuperarPasswordWithRelations = CredencialesRecuperarPassword & CredencialesRecuperarPasswordRelations;
