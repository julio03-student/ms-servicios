import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Proponente, ProponenteRelations, TipoVinculacion, Departamento, ProponenteDepartamento, Imagen} from '../models';
import {TipoVinculacionRepository} from './tipo-vinculacion.repository';
import {ProponenteDepartamentoRepository} from './proponente-departamento.repository';
import {DepartamentoRepository} from './departamento.repository';
import {ImagenRepository} from './imagen.repository';

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

  public readonly imagen: HasOneRepositoryFactory<Imagen, typeof Proponente.prototype.IdProponente>;

  public readonly tiene_un: BelongsToAccessor<Departamento, typeof Proponente.prototype.IdProponente>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('TipoVinculacionRepository') protected tipoVinculacionRepositoryGetter: Getter<TipoVinculacionRepository>, @repository.getter('ProponenteDepartamentoRepository') protected proponenteDepartamentoRepositoryGetter: Getter<ProponenteDepartamentoRepository>, @repository.getter('DepartamentoRepository') protected departamentoRepositoryGetter: Getter<DepartamentoRepository>, @repository.getter('ImagenRepository') protected imagenRepositoryGetter: Getter<ImagenRepository>,
  ) {
    super(Proponente, dataSource);
    this.tiene_un = this.createBelongsToAccessorFor('tiene_un', departamentoRepositoryGetter,);
    this.registerInclusionResolver('tiene_un', this.tiene_un.inclusionResolver);
    this.imagen = this.createHasOneRepositoryFactoryFor('imagen', imagenRepositoryGetter);
    this.registerInclusionResolver('imagen', this.imagen.inclusionResolver);
    this.departamentos = this.createHasManyThroughRepositoryFactoryFor('departamentos', departamentoRepositoryGetter, proponenteDepartamentoRepositoryGetter,);
    this.registerInclusionResolver('departamentos', this.departamentos.inclusionResolver);
    this.tiene_tipoVinculacion = this.createBelongsToAccessorFor('tiene_tipoVinculacion', tipoVinculacionRepositoryGetter,);
    this.registerInclusionResolver('tiene_tipoVinculacion', this.tiene_tipoVinculacion.inclusionResolver);
  }
}
