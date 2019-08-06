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
import {Companytomc} from '../models';
import {CompanytomcRepository} from '../repositories';

export class CompanytomcController {
  constructor(
    @repository(CompanytomcRepository)
    public companytomcRepository : CompanytomcRepository,
  ) {}

  @post('/companytomcs', {
    responses: {
      '200': {
        description: 'Companytomc model instance',
        content: {'application/json': {schema: getModelSchemaRef(Companytomc)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companytomc, {exclude: ['id']}),
        },
      },
    })
    companytomc: Omit<Companytomc, 'id'>,
  ): Promise<Companytomc> {
    return this.companytomcRepository.create(companytomc);
  }

  @get('/companytomcs/count', {
    responses: {
      '200': {
        description: 'Companytomc model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Companytomc)) where?: Where<Companytomc>,
  ): Promise<Count> {
    return this.companytomcRepository.count(where);
  }

  @get('/companytomcs', {
    responses: {
      '200': {
        description: 'Array of Companytomc model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Companytomc)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Companytomc)) filter?: Filter<Companytomc>,
  ): Promise<Companytomc[]> {
    return this.companytomcRepository.find(filter);
  }

  @patch('/companytomcs', {
    responses: {
      '200': {
        description: 'Companytomc PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companytomc, {partial: true}),
        },
      },
    })
    companytomc: Companytomc,
    @param.query.object('where', getWhereSchemaFor(Companytomc)) where?: Where<Companytomc>,
  ): Promise<Count> {
    return this.companytomcRepository.updateAll(companytomc, where);
  }

  @get('/companytomcs/{id}', {
    responses: {
      '200': {
        description: 'Companytomc model instance',
        content: {'application/json': {schema: getModelSchemaRef(Companytomc)}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Companytomc> {
    return this.companytomcRepository.findById(id);
  }

  @patch('/companytomcs/{id}', {
    responses: {
      '204': {
        description: 'Companytomc PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Companytomc, {partial: true}),
        },
      },
    })
    companytomc: Companytomc,
  ): Promise<void> {
    await this.companytomcRepository.updateById(id, companytomc);
  }

  @put('/companytomcs/{id}', {
    responses: {
      '204': {
        description: 'Companytomc PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() companytomc: Companytomc,
  ): Promise<void> {
    await this.companytomcRepository.replaceById(id, companytomc);
  }

  @del('/companytomcs/{id}', {
    responses: {
      '204': {
        description: 'Companytomc DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.companytomcRepository.deleteById(id);
  }
}
