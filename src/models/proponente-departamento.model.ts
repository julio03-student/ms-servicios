import {Entity, model, property} from '@loopback/repository';

@model(/*/{
  settings: {
    foreignKeys: {
      fk_proponenteDepartamento_IdProponente: {
        name: 'fk_proponenteDepartamento_IdProponente',
        entity: 'Proponente',
        entityKey: 'IdProponente',
        foreignKey: 'IdProponente',
      },
      fk_proponenteDepartamento_IdDepartamento: {
        name: 'fk_proponenteDepartamento_IdDepartamento',
        entity: 'Departamente',
        entityKey: 'IdDepartamento',
        foreignKey: 'IdDepartamento',
      }
    },
  },
}/*/)
export class ProponenteDepartamento extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  IdDepartamento: number;

  @property({
    type: 'number',
    required: true,
  })
  IdProponente: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  IdProponenteDepartamento?: number;


  constructor(data?: Partial<ProponenteDepartamento>) {
    super(data);
  }
}

export interface ProponenteDepartamentoRelations {
  // describe navigational properties here
}

export type ProponenteDepartamentoWithRelations = ProponenteDepartamento & ProponenteDepartamentoRelations;
