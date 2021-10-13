import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {TipoVinculacion, TipoVinculacionRelations} from '../models';

export class TipoVinculacionRepository extends DefaultCrudRepository<
  TipoVinculacion,
  typeof TipoVinculacion.prototype.IdTipoVinculacion,
  TipoVinculacionRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(TipoVinculacion, dataSource);
  }
}
