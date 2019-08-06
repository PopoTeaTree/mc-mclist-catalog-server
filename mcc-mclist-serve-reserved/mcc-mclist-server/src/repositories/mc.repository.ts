import {DefaultCrudRepository} from '@loopback/repository';
import {Mc, McRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class McRepository extends DefaultCrudRepository<
  Mc,
  typeof Mc.prototype.id,
  McRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Mc, dataSource);
  }
}
