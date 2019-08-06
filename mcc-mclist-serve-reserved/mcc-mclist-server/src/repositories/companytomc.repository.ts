import {DefaultCrudRepository} from '@loopback/repository';
import {Companytomc, CompanytomcRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompanytomcRepository extends DefaultCrudRepository<
  Companytomc,
  typeof Companytomc.prototype.id,
  CompanytomcRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Companytomc, dataSource);
  }
}
