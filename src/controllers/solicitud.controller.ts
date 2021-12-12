import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Keys} from '../config/keys';
import {Solicitud} from '../models';
import {InvitacionEvaluarRepository, JuradoRepository, SolicitudRepository} from '../repositories';
const fetch = require('node-fetch');
/* @authenticate("admin") */
export class SolicitudController {
  constructor(
    @repository(SolicitudRepository) public solicitudRepository : SolicitudRepository,
    @repository(InvitacionEvaluarRepository) public invitacionEvaluarRepository : InvitacionEvaluarRepository,
    @repository(JuradoRepository) public juradoRepository : JuradoRepository,
  ) {}

  @post('/solicituds')
  @response(200, {
    description: 'Solicitud model instance',
    content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitud',
            exclude: ['IdSolicitud'],
          }),
        },
      },
    })
    solicitud: Omit<Solicitud, 'IdSolicitud'>,
  ): Promise<Solicitud> {
    console.log('Creando')
     let invitacion = this.invitacionEvaluarRepository.findById(solicitud.IdInvitacionEvaluar)
    console.log(invitacion)
    let jurado = await this.juradoRepository.findById((await invitacion).IdJurado)
    console.log("Jurado: ",jurado)
    let credentialsJurado = {
      correo: (await jurado).CorreoJurado,
      asunto: 'Invitacion a Evaluar',
      mensaje: `<br> Se le envia amablemente ésta invitación para que sea Jurado en la evaluación de un trabajo academico.
      <br> Esperamos su pronta respuesta. <br> <br><button type="button">Aceptar</button> <button type="button">Rechazar</button>`
    }

    let res = await fetch(Keys.urlFormato, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentialsJurado)
    })

    return this.solicitudRepository.create(solicitud);
  }

  @get('/solicituds/count')
  @response(200, {
    description: 'Solicitud model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Solicitud) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.count(where);
  }
  @authenticate.skip()
  @get('/solicituds')
  @response(200, {
    description: 'Array of Solicitud model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Solicitud, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Solicitud) filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.solicitudRepository.find(filter);
  }

  @patch('/solicituds')
  @response(200, {
    description: 'Solicitud PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Solicitud,
    @param.where(Solicitud) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.solicitudRepository.updateAll(solicitud, where);
  }

  @authenticate.skip()
  @get('/solicituds/{id}')
  @response(200, {
    description: 'Solicitud model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Solicitud, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Solicitud, {exclude: 'where'}) filter?: FilterExcludingWhere<Solicitud>
  ): Promise<Solicitud> {
    return this.solicitudRepository.findById(id, filter);
  }

  @patch('/solicituds/{id}')
  @response(204, {
    description: 'Solicitud PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Solicitud,
  ): Promise<void> {
    await this.solicitudRepository.updateById(id, solicitud);
  }

  @put('/solicituds/{id}')
  @response(204, {
    description: 'Solicitud PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() solicitud: Solicitud,
  ): Promise<void> {
    await this.solicitudRepository.replaceById(id, solicitud);
  }

  @del('/solicituds/{id}')
  @response(204, {
    description: 'Solicitud DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.solicitudRepository.deleteById(id);
  }
}
