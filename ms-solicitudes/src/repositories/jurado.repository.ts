import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Jurado, JuradoRelations, InvitacionEvaluar, LineaInvestigacion, JuradoLineaInvestigacion} from '../models';
import {InvitacionEvaluarRepository} from './invitacion-evaluar.repository';
import {JuradoLineaInvestigacionRepository} from './jurado-linea-investigacion.repository';
import {LineaInvestigacionRepository} from './linea-investigacion.repository';

export class JuradoRepository extends DefaultCrudRepository<
  Jurado,
  typeof Jurado.prototype.IdJurado,
  JuradoRelations
> {

  public readonly invitacionEvaluars: HasManyRepositoryFactory<InvitacionEvaluar, typeof Jurado.prototype.IdJurado>;

  public readonly lineaInvestigacions: HasManyThroughRepositoryFactory<LineaInvestigacion, typeof LineaInvestigacion.prototype.IdLineaInvestigacion,
          JuradoLineaInvestigacion,
          typeof Jurado.prototype.IdJurado
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('InvitacionEvaluarRepository') protected invitacionEvaluarRepositoryGetter: Getter<InvitacionEvaluarRepository>, @repository.getter('JuradoLineaInvestigacionRepository') protected juradoLineaInvestigacionRepositoryGetter: Getter<JuradoLineaInvestigacionRepository>, @repository.getter('LineaInvestigacionRepository') protected lineaInvestigacionRepositoryGetter: Getter<LineaInvestigacionRepository>,
  ) {
    super(Jurado, dataSource);
    this.lineaInvestigacions = this.createHasManyThroughRepositoryFactoryFor('lineaInvestigacions', lineaInvestigacionRepositoryGetter, juradoLineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('lineaInvestigacions', this.lineaInvestigacions.inclusionResolver);
    this.invitacionEvaluars = this.createHasManyRepositoryFactoryFor('invitacionEvaluars', invitacionEvaluarRepositoryGetter,);
    this.registerInclusionResolver('invitacionEvaluars', this.invitacionEvaluars.inclusionResolver);
  }
}
