import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Solicitud,
  InvitacionEvaluar,
} from '../models';
import {SolicitudRepository} from '../repositories';

export class SolicitudInvitacionEvaluarController {
  constructor(
    @repository(SolicitudRepository)
    public solicitudRepository: SolicitudRepository,
  ) { }

  @get('/solicituds/{id}/invitacion-evaluar', {
    responses: {
      '200': {
        description: 'InvitacionEvaluar belonging to Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(InvitacionEvaluar)},
          },
        },
      },
    },
  })
  async getInvitacionEvaluar(
    @param.path.number('id') id: typeof Solicitud.prototype.IdSolicitud,
  ): Promise<InvitacionEvaluar> {
    return this.solicitudRepository.tiene_invitacion(id);
  }
}
