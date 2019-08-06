import {DefaultCrudRepository} from '@loopback/repository';
import {McTagids, McTagidsRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class McTagidsRepository extends DefaultCrudRepository<
  McTagids,
  typeof McTagids.prototype.id,
  McTagidsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(McTagids, dataSource);
  }
}
