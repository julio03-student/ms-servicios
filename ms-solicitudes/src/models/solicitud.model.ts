import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Modalidad} from './modalidad.model';
import {EstadoSolicitud} from './estado-solicitud.model';
import {TipoSolicitud} from './tipo-solicitud.model';
import {LineaInvestigacion} from './linea-investigacion.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdSolicitud?: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  NombreTrabajoSolicitud: string;
  @property({
    type: 'string',
    required: true,
  })
  ArchivoSolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  DescripcionGeneralSolicitud: string;

  @belongsTo(() => Modalidad, {name: 'modalidad'})
  IdModalidad: number;

  @belongsTo(() => EstadoSolicitud, {name: 'estado'})
  IdEstado: number;

  @belongsTo(() => TipoSolicitud, {name: 'tipoSolicitud'})
  IdTipoSolicitud: number;

  @belongsTo(() => LineaInvestigacion, {name: 'lineaInvestigacion'})
  IdLineaInvestigacion: number;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
