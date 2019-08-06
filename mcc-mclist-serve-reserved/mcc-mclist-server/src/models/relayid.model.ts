import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'catalog', table: '_RelayId'}}})
export class Relayid extends Entity {
  @property({
    type: String,
    required: true,
    length: 36,
    id: 1,
    mysql: {"columnName":"id","dataType":"varchar","dataLength":36,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  id: String;

  @property({
    type: String,
    required: true,
    length: 25,
    mysql: {"columnName":"stableModelIdentifier","dataType":"varchar","dataLength":25,"dataPrecision":null,"dataScale":null,"nullable":"N"},
  })
  stablemodelidentifier: String;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Relayid>) {
    super(data);
  }
}

export interface RelayidRelations {
  // describe navigational properties here
}

export type RelayidWithRelations = Relayid & RelayidRelations;
