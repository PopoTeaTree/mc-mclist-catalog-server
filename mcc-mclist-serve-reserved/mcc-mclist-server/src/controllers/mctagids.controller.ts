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
import {McTagids} from '../models';
import {McTagidsRepository} from '../repositories';

export class MctagidsController {
  constructor(
    @repository(McTagidsRepository)
    public mcTagidsRepository : McTagidsRepository,
  ) {}

  @post('/mc-tagids', {
    responses: {
      '200': {
        description: 'McTagids model instance',
        content: {'application/json': {schema: getModelSchemaRef(McTagids)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(McTagids, {exclude: ['id']}),
        },
      },
    })
    mcTagids: Omit<McTagids, 'id'>,
  ): Promise<McTagids> {
    return this.mcTagidsRepository.create(mcTagids);
  }

  @get('/mc-tagids/count', {
    responses: {
      '200': {
        description: 'McTagids model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(McTagids)) where?: Where<McTagids>,
  ): Promise<Count> {
    return this.mcTagidsRepository.count(where);
  }

  @get('/mc-tagids', {
    responses: {
      '200': {
        description: 'Array of McTagids model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(McTagids)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(McTagids)) filter?: Filter<McTagids>,
  ): Promise<McTagids[]> {
    return this.mcTagidsRepository.find(filter);
  }

  @patch('/mc-tagids', {
    responses: {
      '200': {
        description: 'McTagids PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(McTagids, {partial: true}),
        },
      },
    })
    mcTagids: McTagids,
    @param.query.object('where', getWhereSchemaFor(McTagids)) where?: Where<McTagids>,
  ): Promise<Count> {
    return this.mcTagidsRepository.updateAll(mcTagids, where);
  }

  @get('/mc-tagids/{id}', {
    responses: {
      '200': {
        description: 'McTagids model instance',
        content: {'application/json': {schema: getModelSchemaRef(McTagids)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<McTagids> {
    return this.mcTagidsRepository.findById(id);
  }

  @patch('/mc-tagids/{id}', {
    responses: {
      '204': {
        description: 'McTagids PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(McTagids, {partial: true}),
        },
      },
    })
    mcTagids: McTagids,
  ): Promise<void> {
    await this.mcTagidsRepository.updateById(id, mcTagids);
  }

  @put('/mc-tagids/{id}', {
    responses: {
      '204': {
        description: 'McTagids PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mcTagids: McTagids,
  ): Promise<void> {
    await this.mcTagidsRepository.replaceById(id, mcTagids);
  }

  @del('/mc-tagids/{id}', {
    responses: {
      '204': {
        description: 'McTagids DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mcTagidsRepository.deleteById(id);
  }
}
