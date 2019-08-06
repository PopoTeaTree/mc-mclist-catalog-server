import {DefaultCrudRepository} from '@loopback/repository';
import {Relayid, RelayidRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RelayidRepository extends DefaultCrudRepository<
  Relayid,
  typeof Relayid.prototype.id,
  RelayidRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Relayid, dataSource);
  }
}
