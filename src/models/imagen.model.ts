import {Entity, model, property} from '@loopback/repository';

@model()
export class Imagen extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdImagen?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombreImagen: string;

  @property({
    type: 'number',
    required: true,
  })
  IdProponente: number;

  @property({
    type: 'number',
  })
  IdJurado?: number;


  constructor(data?: Partial<Imagen>) {
    super(data);
  }
}

export interface ImagenRelations {
  // describe navigational properties here
}

export type ImagenWithRelations = Imagen & ImagenRelations;
