import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ResultadoEvaluacion, ResultadoEvaluacionRelations, InvitacionEvaluar} from '../models';
import {InvitacionEvaluarRepository} from './invitacion-evaluar.repository';

export class ResultadoEvaluacionRepository extends DefaultCrudRepository<
  ResultadoEvaluacion,
  typeof ResultadoEvaluacion.prototype.IdResultadoEvaluacion,
  ResultadoEvaluacionRelations
> {

  public readonly tiene_invitacion: BelongsToAccessor<InvitacionEvaluar, typeof ResultadoEvaluacion.prototype.IdResultadoEvaluacion>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('InvitacionEvaluarRepository') protected invitacionEvaluarRepositoryGetter: Getter<InvitacionEvaluarRepository>,
  ) {
    super(ResultadoEvaluacion, dataSource);
    this.tiene_invitacion = this.createBelongsToAccessorFor('tiene_invitacion', invitacionEvaluarRepositoryGetter,);
    this.registerInclusionResolver('tiene_invitacion', this.tiene_invitacion.inclusionResolver);
  }
}
