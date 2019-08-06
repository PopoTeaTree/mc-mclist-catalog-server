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
import {Mc} from '../models';
import {McRepository} from '../repositories';

export class McController {
  constructor(
    @repository(McRepository)
    public mcRepository : McRepository,
  ) {}

  @post('/mcs', {
    responses: {
      '200': {
        description: 'Mc model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mc)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mc, {exclude: ['id']}),
        },
      },
    })
    mc: Omit<Mc, 'id'>,
  ): Promise<Mc> {
    return this.mcRepository.create(mc);
  }

  @get('/mcs/count', {
    responses: {
      '200': {
        description: 'Mc model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Mc)) where?: Where<Mc>,
  ): Promise<Count> {
    return this.mcRepository.count(where);
  }

  @get('/mcs', {
    responses: {
      '200': {
        description: 'Array of Mc model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mc)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Mc)) filter?: Filter<Mc>,
  ): Promise<Mc[]> {
    return this.mcRepository.find(filter);
  }

  @patch('/mcs', {
    responses: {
      '200': {
        description: 'Mc PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mc, {partial: true}),
        },
      },
    })
    mc: Mc,
    @param.query.object('where', getWhereSchemaFor(Mc)) where?: Where<Mc>,
  ): Promise<Count> {
    return this.mcRepository.updateAll(mc, where);
  }

  @get('/mcs/{id}', {
    responses: {
      '200': {
        description: 'Mc model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mc)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Mc> {
    return this.mcRepository.findById(id);
  }

  @patch('/mcs/{id}', {
    responses: {
      '204': {
        description: 'Mc PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mc, {partial: true}),
        },
      },
    })
    mc: Mc,
  ): Promise<void> {
    await this.mcRepository.updateById(id, mc);
  }

  @put('/mcs/{id}', {
    responses: {
      '204': {
        description: 'Mc PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() mc: Mc,
  ): Promise<void> {
    await this.mcRepository.replaceById(id, mc);
  }

  @del('/mcs/{id}', {
    responses: {
      '204': {
        description: 'Mc DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.mcRepository.deleteById(id);
  }
}
