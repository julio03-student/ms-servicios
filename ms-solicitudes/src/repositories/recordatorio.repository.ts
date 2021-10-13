import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Recordatorio, RecordatorioRelations, InvitacionEvaluar} from '../models';
import {InvitacionEvaluarRepository} from './invitacion-evaluar.repository';

export class RecordatorioRepository extends DefaultCrudRepository<
  Recordatorio,
  typeof Recordatorio.prototype.IdRecordatorio,
  RecordatorioRelations
> {

  public readonly invitacionEvaluars: HasManyRepositoryFactory<InvitacionEvaluar, typeof Recordatorio.prototype.IdRecordatorio>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('InvitacionEvaluarRepository') protected invitacionEvaluarRepositoryGetter: Getter<InvitacionEvaluarRepository>,
  ) {
    super(Recordatorio, dataSource);
    this.invitacionEvaluars = this.createHasManyRepositoryFactoryFor('invitacionEvaluars', invitacionEvaluarRepositoryGetter,);
    this.registerInclusionResolver('invitacionEvaluars', this.invitacionEvaluars.inclusionResolver);
  }
}
