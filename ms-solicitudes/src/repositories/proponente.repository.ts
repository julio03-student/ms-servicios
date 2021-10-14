import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proponente, ProponenteRelations, TipoVinculacion, Departamento, ProponenteDepartamento} from '../models';
import {TipoVinculacionRepository} from './tipo-vinculacion.repository';
import {ProponenteDepartamentoRepository} from './proponente-departamento.repository';
import {DepartamentoRepository} from './departamento.repository';

export class ProponenteRepository extends DefaultCrudRepository<
  Proponente,
  typeof Proponente.prototype.IdProponente,
  ProponenteRelations
> {

  public readonly tiene_tipoVinculacion: BelongsToAccessor<TipoVinculacion, typeof Proponente.prototype.IdProponente>;

  public readonly departamentos: HasManyThroughRepositoryFactory<Departamento, typeof Departamento.prototype.IdDepartamento,
          ProponenteDepartamento,
          typeof Proponente.prototype.IdProponente
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TipoVinculacionRepository') protected tipoVinculacionRepositoryGetter: Getter<TipoVinculacionRepository>, @repository.getter('ProponenteDepartamentoRepository') protected proponenteDepartamentoRepositoryGetter: Getter<ProponenteDepartamentoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>,
  ) {
    super(Proponente, dataSource);
    this.departamentos = this.createHasManyThroughRepositoryFactoryFor('departamentos', departamentoRepositoryGetter, proponenteDepartamentoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
    this.tiene_tipoVinculacion = this.createBelongsToAccessorFor('tiene_tipoVinculacion', tipoVinculacionRepositoryGetter,);
    this.registerInclusionResolver('tiene_tipoVinculacion', this.tiene_tipoVinculacion.inclusionResolver);
  }
}
