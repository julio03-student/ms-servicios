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
  response
} from '@loopback/rest';
import {
  Solicitud,
  SolicitudComite,
  Comite,
  ArregloComites,
} from '../models';
import {ComiteRepository, SolicitudComiteRepository, SolicitudRepository} from '../repositories';

export class SolicitudComiteController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
    @repository(SolicitudComiteRepository) protected solicitudComiteRepository: SolicitudComiteRepository
  ) { }

  @get('/solicituds/{id}/comites', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many Comite through SolicitudComite',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Comite)},
          },
        },
      },
    },
  })
  async findComites(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Comite>,
  ): Promise<Comite[]> {
    return this.solicitudRepository.comites(id).find(filter);
  }

  @post('/solicitud-comite', {
    responses: {
      '200': {
        description: 'create a intance of solicitud with a comite',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudComite)}},
      },
    },
  })
  async createRelation(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudComite, {
            title: 'NewSolicitudWithComite',
            exclude: ['IdSolicitudComite'],
          }),
        },
      },
    }) datos: Omit<SolicitudComite, 'IdSolicitudComite'>,
  ): Promise<SolicitudComite | null> {
    let registro = await this.solicitudComiteRepository.create(datos)
    return registro
  }

  @post('/asociar-solicitud-comite/{id}', {
    responses: {
      '200': {
        description: 'create a intance of solicitud with a comite',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudComite)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArregloComites),
        },
      },
    }) datos: ArregloComites,
    @param.path.number('id') id_Solicitud: typeof Solicitud.prototype.IdSolicitud
  ): Promise<Boolean> {
    if (datos.comites.length > 0) {
      datos.comites.forEach(async (id_Comite: number) => {
        let existe = await this.solicitudComiteRepository.findOne({
          where: {
            IdSolicitud: id_Solicitud,
            IdComite: id_Comite
          }
        })
        if (!existe) {
          this.solicitudComiteRepository.create({
            IdSolicitud: id_Solicitud,
            IdComite: id_Comite
          })
        }
      })
      return true
    }
    return false
  }

  @del('/solicitudes/{id_solicitud}/{id_comite}')
  @response(204, {
    description: 'relation DELETE success'
  })
  async EliminarlineadeJurado(
    @param.path.number('id_solicitud') id_Solicitud: number,
    @param.path.number('id_comite') id_Comite: number
  ): Promise<Boolean> {
    let reg = await this.solicitudComiteRepository.findOne({
      where: {
        IdSolicitud: id_Solicitud,
        IdComite: id_Comite
      }
    })
    if (reg) {
      await this.solicitudComiteRepository.deleteById(reg.IdSolicitudComite)
      return true
    }
    return false
  }
}
