import {Entity, model, property, hasMany} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

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

  @hasMany(() => Solicitud, {keyTo: 'IdLineaInvestigacion'})
  solicitudes: Solicitud[];

  constructor(data?: Partial<LineaInvestigacion>) {
    super(data);
  }
}

export interface LineaInvestigacionRelations {
  // describe navigational properties here
}

export type LineaInvestigacionWithRelations = LineaInvestigacion & LineaInvestigacionRelations;
