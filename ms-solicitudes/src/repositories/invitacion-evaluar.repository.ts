import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {InvitacionEvaluar, InvitacionEvaluarRelations, Jurado, Recordatorio, ResultadoEvaluacion, Solicitud} from '../models';
import {JuradoRepository} from './jurado.repository';
import {RecordatorioRepository} from './recordatorio.repository';
import {ResultadoEvaluacionRepository} from './resultado-evaluacion.repository';
import {SolicitudRepository} from './solicitud.repository';

export class InvitacionEvaluarRepository extends DefaultCrudRepository<
  InvitacionEvaluar,
  typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar,
  InvitacionEvaluarRelations
> {

  public readonly a_jurado: BelongsToAccessor<Jurado, typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar>;

  public readonly tiene_recordatorio: BelongsToAccessor<Recordatorio, typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar>;

  public readonly resultadoEvaluacions: HasManyRepositoryFactory<ResultadoEvaluacion, typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar>;

  public readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof InvitacionEvaluar.prototype.IdInvitacionEvaluar>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('JuradoRepository') protected juradoRepositoryGetter: Getter<JuradoRepository>, @repository.getter('RecordatorioRepository') protected recordatorioRepositoryGetter: Getter<RecordatorioRepository>, @repository.getter('ResultadoEvaluacionRepository') protected resultadoEvaluacionRepositoryGetter: Getter<ResultadoEvaluacionRepository>, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(InvitacionEvaluar, dataSource);
    this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
    this.resultadoEvaluacions = this.createHasManyRepositoryFactoryFor('resultadoEvaluacions', resultadoEvaluacionRepositoryGetter,);
    this.registerInclusionResolver('resultadoEvaluacions', this.resultadoEvaluacions.inclusionResolver);
    this.tiene_recordatorio = this.createBelongsToAccessorFor('tiene_recordatorio', recordatorioRepositoryGetter,);
    this.registerInclusionResolver('tiene_recordatorio', this.tiene_recordatorio.inclusionResolver);
    this.a_jurado = this.createBelongsToAccessorFor('a_jurado', juradoRepositoryGetter,);
    this.registerInclusionResolver('a_jurado', this.a_jurado.inclusionResolver);
  }
}
