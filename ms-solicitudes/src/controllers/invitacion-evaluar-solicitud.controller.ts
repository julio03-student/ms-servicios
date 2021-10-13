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
  InvitacionEvaluar,
  Solicitud,
} from '../models';
import {InvitacionEvaluarRepository} from '../repositories';

export class InvitacionEvaluarSolicitudController {
  constructor(
    @repository(InvitacionEvaluarRepository) protected invitacionEvaluarRepository: InvitacionEvaluarRepository,
  ) { }

  @get('/invitacion-evaluars/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of InvitacionEvaluar has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.invitacionEvaluarRepository.solicitudes(id).find(filter);
  }

  @post('/invitacion-evaluars/{id}/solicituds', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInInvitacionEvaluar',
            exclude: ['IdSolicitud'],
            optional: ['IdInvitacionEvaluar']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'IdSolicitud'>,
  ): Promise<Solicitud> {
    return this.invitacionEvaluarRepository.solicitudes(id).create(solicitud);
  }

  @patch('/invitacion-evaluars/{id}/solicituds', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.solicitudes(id).patch(solicitud, where);
  }

  @del('/invitacion-evaluars/{id}/solicituds', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.invitacionEvaluarRepository.solicitudes(id).delete(where);
  }
}
