import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Modalidad} from './modalidad.model';
import {EstadoSolicitud} from './estado-solicitud.model';
import {TipoSolicitud} from './tipo-solicitud.model';
import {LineaInvestigacion} from './linea-investigacion.model';
import {InvitacionEvaluar} from './invitacion-evaluar.model';
import {Comite} from './comite.model';
import {SolicitudComite} from './solicitud-comite.model';
import {Proponente} from './proponente.model';
import {SolicitudProponente} from './solicitud-proponente.model';

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

  @belongsTo(() => InvitacionEvaluar, {name: 'tiene_invitacion'})
  IdInvitacionEvaluar: number;

  @hasMany(() => Comite, {through: {model: () => SolicitudComite, keyFrom: 'IdSolicitud', keyTo: 'IdComite'}})
  comites: Comite[];

  @hasMany(() => Proponente, {through: {model: () => SolicitudProponente, keyFrom: 'IdSolicitud', keyTo: 'IdProponente'}})
  proponentes: Proponente[];

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
