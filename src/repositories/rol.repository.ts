import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbProg3DataSource} from '../datasources';
import {Rol, RolRelations, Usuario, Permiso, PermisoRol} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {PermisoRolRepository} from './permiso-rol.repository';
import {PermisoRepository} from './permiso.repository';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype._idRol,
  RolRelations
> {

  public readonly usuarios: HasManyRepositoryFactory<Usuario, typeof Rol.prototype._idRol>;

  public readonly tiene_permisos: HasManyThroughRepositoryFactory<Permiso, typeof Permiso.prototype._idPermiso,
          PermisoRol,
          typeof Rol.prototype._idRol
        >;

  constructor(
    @inject('datasources.mongodbProg3') dataSource: MongodbProg3DataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('PermisoRolRepository') protected permisoRolRepositoryGetter: Getter<PermisoRolRepository>, @repository.getter('PermisoRepository') protected permisoRepositoryGetter: Getter<PermisoRepository>,
  ) {
    super(Rol, dataSource);
    this.tiene_permisos = this.createHasManyThroughRepositoryFactoryFor('tiene_permisos', permisoRepositoryGetter, permisoRolRepositoryGetter,);
    this.registerInclusionResolver('tiene_permisos', this.tiene_permisos.inclusionResolver);
    this.usuarios = this.createHasManyRepositoryFactoryFor('usuarios', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
  }
}
