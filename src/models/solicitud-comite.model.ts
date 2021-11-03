import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_solicitudComite_IdSolicitud: {
        name: 'fk_solicitudComite_IdSolicitud',
        entity: 'Solicitud',
        entityKey: 'IdSolicitud',
        foreignKey: 'IdSolicitud',
      },
      fk_solicitudComite_IdComite: {
        name: 'fk_solicitudComite_IdComite',
        entity: 'Comite',
        entityKey: 'IdComite',
        foreignKey: 'IdComite',
      }
    },
  },
})
export class SolicitudComite extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdSolicitudComite?: number;

  @property({
    type: 'number',
    required: true,
  })
  IdSolicitud: number;

  @property({
    type: 'number',
    required: true,
  })
  IdComite: number;


  constructor(data?: Partial<SolicitudComite>) {
    super(data);
  }
}

export interface SolicitudComiteRelations {
  // describe navigational properties here
}

export type SolicitudComiteWithRelations = SolicitudComite & SolicitudComiteRelations;
