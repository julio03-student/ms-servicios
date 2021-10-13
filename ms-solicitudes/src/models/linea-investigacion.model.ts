import {Entity, model, property} from '@loopback/repository';

@model()
export class LineaInvestigacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdLineaInvestigacion?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreLineaInvestigacion: string;


  constructor(data?: Partial<LineaInvestigacion>) {
    super(data);
  }
}

export interface LineaInvestigacionRelations {
  // describe navigational properties here
}

export type LineaInvestigacionWithRelations = LineaInvestigacion & LineaInvestigacionRelations;
