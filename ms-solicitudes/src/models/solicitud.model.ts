import {Entity, model, property} from '@loopback/repository';

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
    type: 'number',
    required: true,
  })
  IdModalidad: number;

  @property({
    type: 'number',
    required: true,
  })
  IdEstado: number;

  @property({
    type: 'number',
    required: true,
  })
  IdTipoSolicitud: number;

  @property({
    type: 'number',
    required: true,
  })
  IdLineaInvestigacion: number;

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


  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
