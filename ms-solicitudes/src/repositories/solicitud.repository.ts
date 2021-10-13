import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Solicitud, SolicitudRelations, Modalidad, EstadoSolicitud, TipoSolicitud, LineaInvestigacion} from '../models';
import {ModalidadRepository} from './modalidad.repository';
import {EstadoSolicitudRepository} from './estado-solicitud.repository';
import {TipoSolicitudRepository} from './tipo-solicitud.repository';
import {LineaInvestigacionRepository} from './linea-investigacion.repository';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.IdSolicitud,
  SolicitudRelations
> {

  public readonly modalidad: BelongsToAccessor<Modalidad, typeof Solicitud.prototype.IdSolicitud>;

  public readonly estado: BelongsToAccessor<EstadoSolicitud, typeof Solicitud.prototype.IdSolicitud>;

  public readonly tipoSolicitud: BelongsToAccessor<TipoSolicitud, typeof Solicitud.prototype.IdSolicitud>;

  public readonly lineaInvestigacion: BelongsToAccessor<LineaInvestigacion, typeof Solicitud.prototype.IdSolicitud>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('ModalidadRepository') protected modalidadRepositoryGetter: Getter<ModalidadRepository>, @repository.getter('EstadoSolicitudRepository') protected estadoSolicitudRepositoryGetter: Getter<EstadoSolicitudRepository>, @repository.getter('TipoSolicitudRepository') protected tipoSolicitudRepositoryGetter: Getter<TipoSolicitudRepository>, @repository.getter('LineaInvestigacionRepository') protected lineaInvestigacionRepositoryGetter: Getter<LineaInvestigacionRepository>,
  ) {
    super(Solicitud, dataSource);
    this.lineaInvestigacion = this.createBelongsToAccessorFor('lineaInvestigacion', lineaInvestigacionRepositoryGetter,);
    this.registerInclusionResolver('lineaInvestigacion', this.lineaInvestigacion.inclusionResolver);
    this.tipoSolicitud = this.createBelongsToAccessorFor('tipoSolicitud', tipoSolicitudRepositoryGetter,);
    this.registerInclusionResolver('tipoSolicitud', this.tipoSolicitud.inclusionResolver);
    this.estado = this.createBelongsToAccessorFor('estado', estadoSolicitudRepositoryGetter,);
    this.registerInclusionResolver('estado', this.estado.inclusionResolver);
    this.modalidad = this.createBelongsToAccessorFor('modalidad', modalidadRepositoryGetter,);
    this.registerInclusionResolver('modalidad', this.modalidad.inclusionResolver);
  }
}
