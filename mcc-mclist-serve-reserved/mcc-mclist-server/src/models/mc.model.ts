import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'catalog', table: 'MC'}}})
export class Mc extends Entity {
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
    length: 16777215,
    mysql: {"columnName":"name","dataType":"mediumtext","dataLength":16777215,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  name: String;

  @property({
    type: String,
    required: false,
    length: 16777215,
    mysql: {"columnName":"description","dataType":"mediumtext","dataLength":16777215,"dataPrecision":null,"dataScale":null,"nullable":"Y"},
  })
  description?: String;

  @property({
    type: Number,
    required: true,
    precision: 65,
    scale: 30,
    mysql: {"columnName":"price","dataType":"decimal","dataLength":null,"dataPrecision":65,"dataScale":30,"nullable":"N"},
  })
  price: Number;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"updatedAt","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  updatedat: Date;

  @property({
    type: Date,
    required: true,
    mysql: {"columnName":"createdAt","dataType":"datetime","dataLength":null,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  createdat: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mc>) {
    super(data);
  }
}

export interface McRelations {
  // describe navigational properties here
}

export type McWithRelations = Mc & McRelations;
