import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {InvitacionEvaluar} from './invitacion-evaluar.model';
import {LineaInvestigacion} from './linea-investigacion.model';
import {JuradoLineaInvestigacion} from './jurado-linea-investigacion.model';
import {Imagen} from './imagen.model';

@model()
export class Jurado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdJurado?: number;

  @property({
    type: 'string',
    required: true,
  })
  NombreJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  TelefonoJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  CorreoJurado: string;

  @property({
    type: 'string',
    required: true,
  })
  VinculacionJurado: string;

  @hasMany(() => InvitacionEvaluar, {keyTo: 'IdJurado'})
  invitacionEvaluars: InvitacionEvaluar[];

  @hasMany(() => LineaInvestigacion, {through: {model: () => JuradoLineaInvestigacion, keyFrom: 'IdJurado', keyTo: 'IdLineaInvestigacion'}})
  lineaInvestigacions: LineaInvestigacion[];

  @hasOne(() => Imagen, {keyTo: 'IdJurado'})
  imagen: Imagen;

  constructor(data?: Partial<Jurado>) {
    super(data);
  }
}

export interface JuradoRelations {
  // describe navigational properties here
}

export type JuradoWithRelations = Jurado & JuradoRelations;
