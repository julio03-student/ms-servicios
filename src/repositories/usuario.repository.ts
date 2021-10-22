import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbProg3DataSource} from '../datasources';
import {Usuario, UsuarioRelations, Rol} from '../models';
import {RolRepository} from './rol.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype._idUsuario,
  UsuarioRelations
> {

  public readonly tiene_un: BelongsToAccessor<Rol, typeof Usuario.prototype._idUsuario>;

  constructor(
    @inject('datasources.mongodbProg3') dataSource: MongodbProg3DataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Usuario, dataSource);
    this.tiene_un = this.createBelongsToAccessorFor('tiene_un', rolRepositoryGetter,);
    this.registerInclusionResolver('tiene_un', this.tiene_un.inclusionResolver);

  }
}
