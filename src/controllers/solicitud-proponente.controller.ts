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
import {Keys} from '../config/keys';
import {
SolicitudProponente,
Proponente,
ArregloSolicitudes,
} from '../models';
import {ProponenteRepository, SolicitudProponenteRepository, SolicitudRepository} from '../repositories';

const fetch = require('node-fetch');

export class SolicitudProponenteController {
  constructor(
    @repository(SolicitudRepository) protected solicitudRepository: SolicitudRepository,
    @repository(SolicitudProponenteRepository) protected solicitudProponenteRepository: SolicitudProponenteRepository,
    @repository(ProponenteRepository) public proponenteRepository : ProponenteRepository
  ) { }

  @get('/solicituds/{id}/proponentes', {
    responses: {
      '200': {
        description: 'Array of Solicitud has many Proponente through SolicitudProponente',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proponente)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Proponente>,
  ): Promise<Proponente[]> {
    return this.solicitudRepository.proponentes(id).find(filter);
  }

  @post('/solicitud-proponente', {
    responses: {
      '200': {
        description: 'create a intance of solicitud with a proponente',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudProponente)}},
      },
    },
  })
  async createRelation(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudProponente, {
            title: 'NewSolicitudProponente',
            exclude: ['IdSolicitudProponente'],
          }),
        },
      },
    }) datos: Omit<SolicitudProponente, 'IdSolicitudProponente'>,
  ): Promise<SolicitudProponente | null> {

    let solicitud = this.solicitudRepository.findById(datos.IdSolicitud)

    console.log("solicitud: "+solicitud)
    let proponente = this.proponenteRepository.findById(datos.IdProponente)

    let credentialsProponente = {
      correo: (await proponente).CorreoProponente,
      asunto: 'Estado solicitud',
      mensaje: `<br> Su solictud ha sido registrada exitosamente!<br>
      <strong>Fecha:</strong>${(await solicitud).FechaSolicitud}<br>
      <strong>Nombre del trabajo::</strong>${(await solicitud).NombreTrabajoSolicitud}<br>
      <strong>Fecha:</strong>${(await solicitud).FechaSolicitud}<br>`
    }

    let res1 = await fetch(Keys.urlFormato, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentialsProponente)
    })

    let registro = await this.solicitudProponenteRepository.create(datos)
    return registro
  }

  @post('/asociar-solicitudes-proponentes/{id}', {
    responses: {
      '200': {
        description: 'create a intance of solicitud with a proponente',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudProponente)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArregloSolicitudes),
        },
      },
    }) datos: ArregloSolicitudes,
    @param.path.number('id') id_Proponente: typeof Proponente.prototype.IdProponente
  ): Promise<Boolean> {
    if (datos.solicitudes.length > 0) {
      datos.solicitudes.forEach(async (id_solicitud: number) => {
        let existe = await this.solicitudProponenteRepository.findOne({
          where: {
            IdProponente: id_Proponente,
            IdSolicitud: id_solicitud
          }
        })
        if (!existe) {
          this.solicitudProponenteRepository.create({
            IdProponente: id_Proponente,
            IdSolicitud: id_solicitud
          })
        }
      })
      return true
    }
    return false
  }

  @del('/solicitudes/{id_proponente}/{id_solicitud}')
  @response(204, {
    description: 'relation DELETE success'
  })
  async EliminarProponentedeSolicitud(
    @param.path.number('id_prpoponente') id_Proponente: number,
    @param.path.number('id_solicitud') id_Solicitud: number
  ): Promise<Boolean> {
    let reg = await this.solicitudProponenteRepository.findOne({
      where: {
        IdProponente: id_Proponente,
        IdSolicitud: id_Solicitud
      }
    })
    if (reg) {
      await this.solicitudProponenteRepository.deleteById(reg.IdSolicitudProponente)
      return true
    }
    return false
  }
}
