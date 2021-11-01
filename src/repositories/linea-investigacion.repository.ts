import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {LineaInvestigacion, LineaInvestigacionRelations, Solicitud, JuradoLineaInvestigacion, Jurado} from '../models';
import {SolicitudRepository} from './solicitud.repository';
import {JuradoLineaInvestigacionRepository} from './jurado-linea-investigacion.repository';
import { JuradoRepository } from '.';

export class LineaInvestigacionRepository extends DefaultCrudRepository<
  LineaInvestigacion,
  typeof LineaInvestigacion.prototype.IdLineaInvestigacion,
  LineaInvestigacionRelations
> {

  public readonly solicitudes: HasManyRepositoryFactory<Solicitud, typeof LineaInvestigacion.prototype.IdLineaInvestigacion>;

  public readonly jurados: HasManyThroughRepositoryFactory<Jurado, typeof Jurado.prototype.IdJurado,
          JuradoLineaInvestigacion,
          typeof LineaInvestigacion.prototype.IdLineaInvestigacion
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>, @repository.getter('JuradoLineaInvestigacionRepository') protected juradoLineaInvestigacionRepositoryGetter: Getter<JuradoLineaInvestigacionRepository>, @repository.getter('JuradoRepository') protected JuradoRepositoryGetter: Getter<JuradoRepository>,
  ) {
    super(LineaInvestigacion, dataSource);
    this.jurados = this.createHasManyThroughRepositoryFactoryFor('jurados', JuradoRepositoryGetter, juradoLineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('jurados', this.jurados.inclusionResolver);
    this.solicitudes = this.createHasManyRepositoryFactoryFor('solicitudes', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicitudes', this.solicitudes.inclusionResolver);
  }
}
