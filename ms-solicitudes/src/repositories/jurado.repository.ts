import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurado, JuradoRelations, InvitacionEvaluar} from '../models';
import {InvitacionEvaluarRepository} from './invitacion-evaluar.repository';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype.IdJurado,
  JuradoRelations
> {

  public readonly invitacionEvaluars: HasManyRepositoryFactory<InvitacionEvaluar, typeof Jurado.prototype.IdJurado>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('InvitacionEvaluarRepository') protected invitacionEvaluarRepositoryGetter: Getter<InvitacionEvaluarRepository>,
  ) {
    super(Jurado, dataSource);
    this.invitacionEvaluars = this.createHasManyRepositoryFactoryFor('invitacionEvaluars', invitacionEvaluarRepositoryGetter,);
    this.registerInclusionResolver('invitacionEvaluars', this.invitacionEvaluars.inclusionResolver);
  }
}
