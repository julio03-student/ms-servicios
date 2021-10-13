import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proponente, ProponenteRelations, TipoVinculacion} from '../models';
import {TipoVinculacionRepository} from './tipo-vinculacion.repository';

export class ProponenteRepository extends DefaultCrudRepository<
  Proponente,
  typeof Proponente.prototype.IdProponente,
  ProponenteRelations
> {

  public readonly tiene_tipoVinculacion: BelongsToAccessor<TipoVinculacion, typeof Proponente.prototype.IdProponente>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TipoVinculacionRepository') protected tipoVinculacionRepositoryGetter: Getter<TipoVinculacionRepository>,
  ) {
    super(Proponente, dataSource);
    this.tiene_tipoVinculacion = this.createBelongsToAccessorFor('tiene_tipoVinculacion', tipoVinculacionRepositoryGetter,);
    this.registerInclusionResolver('tiene_tipoVinculacion', this.tiene_tipoVinculacion.inclusionResolver);
  }
}
