import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  InvitacionEvaluar,
  Recordatorio,
} from '../models';
import {InvitacionEvaluarRepository} from '../repositories';

export class InvitacionEvaluarRecordatorioController {
  constructor(
    @repository(InvitacionEvaluarRepository)
    public invitacionEvaluarRepository: InvitacionEvaluarRepository,
  ) { }

  @get('/invitacion-evaluars/{id}/recordatorio', {
    responses: {
      '200': {
        description: 'Recordatorio belonging to InvitacionEvaluar',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Recordatorio)},
          },
        },
      },
    },
  })
  async getRecordatorio(
    @param.path.number('id') id: typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar,
  ): Promise<Recordatorio> {
    return this.invitacionEvaluarRepository.tiene_recordatorio(id);
  }
}
