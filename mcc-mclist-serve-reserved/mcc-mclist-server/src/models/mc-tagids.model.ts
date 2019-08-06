import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'catalog', table: 'MC_tagIDs'}}})
export class McTagids extends Entity {
  @property({
    type: String,
    required: true,
    length: 25,
    id: 1,
    mysql: {"columnName":"nodeId","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  nodeid: String;

  @property({
    type: Number,
    required: true,
    precision: 10,
    scale: 0,
    id: 2,
    mysql: {"columnName":"position","dataType":"int","dataLength":null,"dataPrecision":10,"dataScale":0,"nullable":"N"},
  })
  position: Number;

  @property({
    type: String,
    required: true,
    length: 25,
    mysql: {"columnName":"value","dataType":"char","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  value: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<McTagids>) {
    super(data);
  }
}

export interface McTagidsRelations {
  // describe navigational properties here
}

export type McTagidsWithRelations = McTagids & McTagidsRelations;
