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
  Usuario,
  Rol,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioRolController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/rol', {
    responses: {
      '200': {
        description: 'Usuario has one Rol',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Rol),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Rol>,
  ): Promise<Rol> {
    return this.usuarioRepository.tiene_un(id).get(filter);
  }

  @post('/usuarios/{id}/rol', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rol)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Usuario.prototype._idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {
            title: 'NewRolInUsuario',
            exclude: ['_idRol'],
            optional: ['idRol']
          }),
        },
      },
    }) rol: Omit<Rol, '_idRol'>,
  ): Promise<Rol> {
    return this.usuarioRepository.tiene_un(id).create(rol);
  }

  @patch('/usuarios/{id}/rol', {
    responses: {
      '200': {
        description: 'Usuario.Rol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {partial: true}),
        },
      },
    })
    rol: Partial<Rol>,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.usuarioRepository.tiene_un(id).patch(rol, where);
  }

  @del('/usuarios/{id}/rol', {
    responses: {
      '200': {
        description: 'Usuario.Rol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.usuarioRepository.tiene_un(id).delete(where);
  }
}
