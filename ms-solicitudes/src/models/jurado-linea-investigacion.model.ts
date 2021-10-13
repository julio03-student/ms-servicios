import {Entity, model, property} from '@loopback/repository';

@model()
export class JuradoLineaInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdJuradoLineaInvestigacion?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdJurado: number;

  @property({
    type: 'number',
    required: true,
  })
  IdLineaInvestigacion: number;


  constructor(data?: Partial<JuradoLineaInvestigacion>) {
    super(data);
  }
}

export interface JuradoLineaInvestigacionRelations {
  // describe navigational properties here
}

export type JuradoLineaInvestigacionWithRelations = JuradoLineaInvestigacion & JuradoLineaInvestigacionRelations;
