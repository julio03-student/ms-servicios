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
Proponente,
ProponenteDepartamento,
Departamento,
ArregloDepartamentos,
} from '../models';
import {ProponenteDepartamentoRepository, ProponenteRepository} from '../repositories';

export class ProponenteDepartamentoController {
  constructor(
    @repository(ProponenteRepository) protected proponenteRepository: ProponenteRepository,
    @repository(ProponenteDepartamentoRepository) protected proponenteDepartamentRepository: ProponenteDepartamentoRepository
  ) { }

  @get('/proponentes/{id}/departamentos', {
    responses: {
      '200': {
        description: 'Array of Proponente has many Departamento through ProponenteDepartamento',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Departamento)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Departamento>,
  ): Promise<Departamento[]> {
    return this.proponenteRepository.departamentos(id).find(filter);
  }

  @post('/proponente-departamento', {
    responses: {
      '200': {
        description: 'create a intance of proponente with a departamento',
        content: {'application/json': {schema: getModelSchemaRef(ProponenteDepartamento)}},
      },
    },
  })
  async createRelation(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProponenteDepartamento, {
            title: 'NewProponenteWithDepartamento',
            exclude: ['IdProponenteDepartamento'],
          }),
        },
      },
    }) datos: Omit<ProponenteDepartamento, 'IdJuradoLineaInvestigacion'>,
  ): Promise<ProponenteDepartamento | null> {
    let registro = await this.proponenteDepartamentRepository.create(datos)
    return registro
  }

  @post('/asociar-proponente-departamento/{id}', {
    responses: {
      '200': {
        description: 'create a intance of proponente with a departamento',
        content: {'application/json': {schema: getModelSchemaRef(ProponenteDepartamento)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ArregloDepartamentos),
        },
      },
    }) datos: ArregloDepartamentos,
    @param.path.number('id') id_Proponente: typeof Proponente.prototype.IdProponente
  ): Promise<Boolean> {
    if (datos.departamentos.length > 0) {
      datos.departamentos.forEach(async (id_Departamento: number) => {
        let existe = await this.proponenteDepartamentRepository.findOne({
          where: {
            IdProponente: id_Proponente,
            IdDepartamento: id_Departamento
          }
        })
        if (!existe) {
          this.proponenteDepartamentRepository.create({
            IdProponente: id_Proponente,
            IdDepartamento: id_Departamento
          })
        }
      })
      return true
    }
    return false
  }

  @del('/proponentes/{id_proponente}/{id_departamento}')
  @response(204, {
    description: 'relation DELETE success'
  })
  async EliminarlineadeJurado(
    @param.path.number('id_proponente') id_Proponente: number,
    @param.path.number('id_departamento') id_Departamento: number
  ): Promise<Boolean> {
    let reg = await this.proponenteDepartamentRepository.findOne({
      where: {
        IdProponente: id_Proponente,
        IdDepartamento: id_Departamento
      }
    })
    if (reg) {
      await this.proponenteDepartamentRepository.deleteById(reg.IdProponenteDepartamento)
      return true
    }
    return false
  }
}
