import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_solicitudProponente_IdProponente: {
        name: 'fk_solicitudProponente_IdProponente',
        entity: 'Proponente',
        entityKey: 'IdProponente',
        foreignKey: 'IdProponente',
      },
      fk_solicitudProponente_IdSolicitud: {
        name: 'fk_solicitudProponente_IdSolicitud',
        entity: 'Solicitud',
        entityKey: 'IdSolicitud',
        foreignKey: 'IdSolicitud',
      }
    },
  },
})
export class SolicitudProponente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdSolicitudProponente?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdProponente: number;

  @property({
    type: 'number',
    required: true,
  })
  IdSolicitud: number;


  constructor(data?: Partial<SolicitudProponente>) {
    super(data);
  }
}

export interface SolicitudProponenteRelations {
  // describe navigational properties here
}

export type SolicitudProponenteWithRelations = SolicitudProponente & SolicitudProponenteRelations;
