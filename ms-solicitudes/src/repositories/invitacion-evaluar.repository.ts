import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {InvitacionEvaluar, InvitacionEvaluarRelations, Jurado} from '../models';
import {JuradoRepository} from './jurado.repository';

export class InvitacionEvaluarRepository extends DefaultCrudRepository<
  InvitacionEvaluar,
  typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar,
  InvitacionEvaluarRelations
> {

  public readonly a_jurado: BelongsToAccessor<Jurado, typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>,
  ) {
    super(InvitacionEvaluar, dataSource);
    this.a_jurado = this.createBelongsToAccessorFor('a_jurado', juradoRepositoryGetter,);
    this.registerInclusionResolver('a_jurado', this.a_jurado.inclusionResolver);
  }
}
