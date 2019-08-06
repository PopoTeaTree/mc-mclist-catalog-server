import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'catalog', table: '_CompanyToMC'}}
})
export class Companytomc extends Entity {
  @property({
    type: String,
    required: true,
    length: 25,
    id: 1,
    mysql: {"columnName":"id","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  id: String;

  @property({
    type: String,
    required: true,
    length: 25,
    mysql: {"columnName":"A","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  a: String;

  @property({
    type: String,
    required: true,
    length: 25,
    mysql: {"columnName":"B","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  b: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Companytomc>) {
    super(data);
  }
}

export interface CompanytomcRelations {
  // describe navigational properties here
}

export type CompanytomcWithRelations = Companytomc & CompanytomcRelations;
