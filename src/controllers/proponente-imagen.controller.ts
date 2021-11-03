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
  Proponente,
  Imagen,
} from '../models';
import {ProponenteRepository} from '../repositories';

export class ProponenteImagenController {
  constructor(
    @repository(ProponenteRepository) protected proponenteRepository: ProponenteRepository,
  ) { }

  @get('/proponentes/{id}/imagen', {
    responses: {
      '200': {
        description: 'Proponente has one Imagen',
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
    return this.proponenteRepository.imagen(id).get(filter);
  }

  @post('/proponentes/{id}/imagen', {
    responses: {
      '200': {
        description: 'Proponente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Imagen)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Proponente.prototype.IdProponente,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Imagen, {
            title: 'NewImagenInProponente',
            exclude: ['IdImagen'],
            optional: ['IdProponente']
          }),
        },
      },
    }) imagen: Omit<Imagen, 'IdImagen'>,
  ): Promise<Imagen> {
    return this.proponenteRepository.imagen(id).create(imagen);
  }

  @patch('/proponentes/{id}/imagen', {
    responses: {
      '200': {
        description: 'Proponente.Imagen PATCH success count',
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
    return this.proponenteRepository.imagen(id).patch(imagen, where);
  }

  @del('/proponentes/{id}/imagen', {
    responses: {
      '200': {
        description: 'Proponente.Imagen DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Imagen)) where?: Where<Imagen>,
  ): Promise<Count> {
    return this.proponenteRepository.imagen(id).delete(where);
  }
}
