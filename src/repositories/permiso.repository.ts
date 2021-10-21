import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbProg3DataSource} from '../datasources';
import {Permiso, PermisoRelations} from '../models';

export class PermisoRepository extends DefaultCrudRepository<
  Permiso,
  typeof Permiso.prototype._idPermiso,
  PermisoRelations
> {
  constructor(
    @inject('datasources.mongodbProg3') dataSource: MongodbProg3DataSource,
  ) {
    super(Permiso, dataSource);
  }
}
