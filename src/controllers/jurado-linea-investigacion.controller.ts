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
  Arreglolineadeinvestigacion,
  Jurado,
  JuradoLineaInvestigacion,
  LineaInvestigacion,
} from '../models';
import {JuradoLineaInvestigacionRepository, JuradoRepository, LineaInvestigacionRepository} from '../repositories';

export class JuradoLineaInvestigacionController {
  constructor(
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
    @repository(JuradoLineaInvestigacionRepository) protected juradoLineainvestigacionRepository: JuradoLineaInvestigacionRepository,
    @repository(LineaInvestigacionRepository) protected lineaInvestigacionRepository: LineaInvestigacionRepository
    ) { }

  @get('/jurados/{id}/linea-investigacions', {
    responses: {
      '200': {
        description: 'Array of Jurado has many LineaInvestigacion through JuradoLineaInvestigacion',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(LineaInvestigacion)},
          },
        },
      },
    },
  })
  async findLineasdeJurados(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<LineaInvestigacion>,
  ): Promise<LineaInvestigacion[]> {
    return this.juradoRepository.lineaInvestigacions(id).find(filter);
  }

  @post('/jurado-linea-investigacion', {
    responses: {
      '200': {
        description: 'create a intance of linea-investigacion with a jurado',
        content: {'application/json': {schema: getModelSchemaRef(JuradoLineaInvestigacion)}},
      },
    },
  })
  async createRelation(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JuradoLineaInvestigacion, {
            title: 'NewLineaInvestigacionWithJurado',
            exclude: ['IdJuradoLineaInvestigacion'],
          }),
        },
      },
    }) datos: Omit<JuradoLineaInvestigacion, 'IdJuradoLineaInvestigacion'>,
  ): Promise<JuradoLineaInvestigacion | null> {
    let registro = await this.juradoLineainvestigacionRepository.create(datos)
    return registro
  }

  @post('/asociar-jurados-lineas-investigacion/{id}', {
    responses: {
      '200': {
        description: 'create a intance of linea-investigacion with a jurado',
        content: {'application/json': {schema: getModelSchemaRef(JuradoLineaInvestigacion)}},
      },
    },
  })
  async createRelations(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Arreglolineadeinvestigacion),
        },
      },
    }) datos: Arreglolineadeinvestigacion,
    @param.path.number('id') id_Jurado: typeof Jurado.prototype.IdJurado
  ): Promise<Boolean> {
    if (datos.lineas_investigacion.length > 0) {
      datos.lineas_investigacion.forEach(async (id_linea: number) => {
        let existe = await this.juradoLineainvestigacionRepository.findOne({
          where: {
            IdJurado: id_Jurado,
            IdLineaInvestigacion: id_linea
          }
        })
        if (!existe) {
          this.juradoLineainvestigacionRepository.create({
            IdJurado: id_Jurado,
            IdLineaInvestigacion: id_linea
          })
        }
      })
      return true
    }
    return false
  }

  @patch('/jurados/{id}/linea-investigacions', {
    responses: {
      '200': {
        description: 'Jurado.LineaInvestigacion PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(LineaInvestigacion, {partial: true}),
        },
      },
    })
    lineaInvestigacion: Partial<LineaInvestigacion>,
    @param.query.object('where', getWhereSchemaFor(LineaInvestigacion)) where?: Where<LineaInvestigacion>,
  ): Promise<Count> {
    return this.juradoRepository.lineaInvestigacions(id).patch(lineaInvestigacion, where);
  }

  @del('/jurados/{id_jurado}/{id_linea}')
  @response(204, {
    description: 'relation DELETE success'
  })
  async EliminarlineadeJurado(
    @param.path.number('id_jurado') id_Jurado: number,
    @param.path.number('id_linea') id_LineaInvestigacion: number
  ): Promise<Boolean> {
    let reg = await this.juradoLineainvestigacionRepository.findOne({
      where: {
        IdJurado: id_Jurado,
        IdLineaInvestigacion: id_LineaInvestigacion
      }
    })
    if (reg) {
      await this.juradoLineainvestigacionRepository.deleteById(reg.IdJuradoLineaInvestigacion)
      return true
    }
    return false
  }
}

