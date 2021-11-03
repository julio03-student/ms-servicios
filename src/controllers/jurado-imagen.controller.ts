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
  Jurado,
  Imagen,
} from '../models';
import {JuradoRepository} from '../repositories';

export class JuradoImagenController {
  constructor(
    @repository(JuradoRepository) protected juradoRepository: JuradoRepository,
  ) { }

  @get('/jurados/{id}/imagen', {
    responses: {
      '200': {
        description: 'Jurado has one Imagen',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Imagen),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Imagen>,
  ): Promise<Imagen> {
    return this.juradoRepository.imagen(id).get(filter);
  }

  @post('/jurados/{id}/imagen', {
    responses: {
      '200': {
        description: 'Jurado model instance',
        content: {'application/json': {schema: getModelSchemaRef(Imagen)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Jurado.prototype.IdJurado,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {
            title: 'NewImagenInJurado',
            exclude: ['IdImagen'],
            optional: ['IdJurado']
          }),
        },
      },
    }) imagen: Omit<Imagen, 'IdImagen'>,
  ): Promise<Imagen> {
    return this.juradoRepository.imagen(id).create(imagen);
  }

  @patch('/jurados/{id}/imagen', {
    responses: {
      '200': {
        description: 'Jurado.Imagen PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {partial: true}),
        },
      },
    })
    imagen: Partial<Imagen>,
    @param.query.object('where', getWhereSchemaFor(Imagen)) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.juradoRepository.imagen(id).patch(imagen, where);
  }

  @del('/jurados/{id}/imagen', {
    responses: {
      '200': {
        description: 'Jurado.Imagen DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Imagen)) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.juradoRepository.imagen(id).delete(where);
  }
}
