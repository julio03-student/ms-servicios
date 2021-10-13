import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Recordatorio,
  InvitacionEvaluar,
} from '../models';
import {RecordatorioRepository} from '../repositories';

export class RecordatorioInvitacionEvaluarController {
  constructor(
    @repository(RecordatorioRepository) protected recordatorioRepository: RecordatorioRepository,
  ) { }

  @get('/recordatorios/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Array of Recordatorio has many InvitacionEvaluar',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(InvitacionEvaluar)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<InvitacionEvaluar>,
  ): Promise<InvitacionEvaluar[]> {
    return this.recordatorioRepository.invitacionEvaluars(id).find(filter);
  }

  @post('/recordatorios/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Recordatorio model instance',
        content: {'application/json': {schema: getModelSchemaRef(InvitacionEvaluar)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Recordatorio.prototype.IdRecordatorio,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InvitacionEvaluar, {
            title: 'NewInvitacionEvaluarInRecordatorio',
            exclude: ['IdInvitacionEvaluar'],
            optional: ['IdRecordatorio']
          }),
        },
      },
    }) invitacionEvaluar: Omit<InvitacionEvaluar, 'IdInvitacionEvaluar'>,
  ): Promise<InvitacionEvaluar> {
    return this.recordatorioRepository.invitacionEvaluars(id).create(invitacionEvaluar);
  }

  @patch('/recordatorios/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Recordatorio.InvitacionEvaluar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InvitacionEvaluar, {partial: true}),
        },
      },
    })
    invitacionEvaluar: Partial<InvitacionEvaluar>,
    @param.query.object('where', getWhereSchemaFor(InvitacionEvaluar)) where?: Where<InvitacionEvaluar>,
  ): Promise<Count> {
    return this.recordatorioRepository.invitacionEvaluars(id).patch(invitacionEvaluar, where);
  }

  @del('/recordatorios/{id}/invitacion-evaluars', {
    responses: {
      '200': {
        description: 'Recordatorio.InvitacionEvaluar DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(InvitacionEvaluar)) where?: Where<InvitacionEvaluar>,
  ): Promise<Count> {
    return this.recordatorioRepository.invitacionEvaluars(id).delete(where);
  }
}
