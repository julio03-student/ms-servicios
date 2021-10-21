import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbProg3DataSource} from '../datasources';
import {PermisoRol, PermisoRolRelations} from '../models';

export class PermisoRolRepository extends DefaultCrudRepository<
  PermisoRol,
  typeof PermisoRol.prototype._id,
  PermisoRolRelations
> {
  constructor(
    @inject('datasources.mongodbProg3') dataSource: MongodbProg3DataSource,
  ) {
    super(PermisoRol, dataSource);
  }
}
