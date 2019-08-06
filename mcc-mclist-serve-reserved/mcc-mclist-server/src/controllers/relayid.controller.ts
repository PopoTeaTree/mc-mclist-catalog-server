import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Relayid} from '../models';
import {RelayidRepository} from '../repositories';

export class RelayidController {
  constructor(
    @repository(RelayidRepository)
    public relayidRepository : RelayidRepository,
  ) {}

  @post('/relayids', {
    responses: {
      '200': {
        description: 'Relayid model instance',
        content: {'application/json': {schema: getModelSchemaRef(Relayid)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Relayid, {exclude: ['id']}),
        },
      },
    })
    relayid: Omit<Relayid, 'id'>,
  ): Promise<Relayid> {
    return this.relayidRepository.create(relayid);
  }

  @get('/relayids/count', {
    responses: {
      '200': {
        description: 'Relayid model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Relayid)) where?: Where<Relayid>,
  ): Promise<Count> {
    return this.relayidRepository.count(where);
  }

  @get('/relayids', {
    responses: {
      '200': {
        description: 'Array of Relayid model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Relayid)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Relayid)) filter?: Filter<Relayid>,
  ): Promise<Relayid[]> {
    return this.relayidRepository.find(filter);
  }

  @patch('/relayids', {
    responses: {
      '200': {
        description: 'Relayid PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Relayid, {partial: true}),
        },
      },
    })
    relayid: Relayid,
    @param.query.object('where', getWhereSchemaFor(Relayid)) where?: Where<Relayid>,
  ): Promise<Count> {
    return this.relayidRepository.updateAll(relayid, where);
  }

  @get('/relayids/{id}', {
    responses: {
      '200': {
        description: 'Relayid model instance',
        content: {'application/json': {schema: getModelSchemaRef(Relayid)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Relayid> {
    return this.relayidRepository.findById(id);
  }

  @patch('/relayids/{id}', {
    responses: {
      '204': {
        description: 'Relayid PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Relayid, {partial: true}),
        },
      },
    })
    relayid: Relayid,
  ): Promise<void> {
    await this.relayidRepository.updateById(id, relayid);
  }

  @put('/relayids/{id}', {
    responses: {
      '204': {
        description: 'Relayid PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() relayid: Relayid,
  ): Promise<void> {
    await this.relayidRepository.replaceById(id, relayid);
  }

  @del('/relayids/{id}', {
    responses: {
      '204': {
        description: 'Relayid DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.relayidRepository.deleteById(id);
  }
}
