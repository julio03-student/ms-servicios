import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Departamento, DepartamentoRelations, Facultad} from '../models';
import {FacultadRepository} from './facultad.repository';

export class DepartamentoRepository extends DefaultCrudRepository<
  Departamento,
  typeof Departamento.prototype.IdDepartamento,
  DepartamentoRelations
> {

  public readonly tiene_facultad: BelongsToAccessor<Facultad, typeof Departamento.prototype.IdDepartamento>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('FacultadRepository') protected facultadRepositoryGetter: Getter<FacultadRepository>,
  ) {
    super(Departamento, dataSource);
    this.tiene_facultad = this.createBelongsToAccessorFor('tiene_facultad', facultadRepositoryGetter,);
    this.registerInclusionResolver('tiene_facultad', this.tiene_facultad.inclusionResolver);
  }
}
