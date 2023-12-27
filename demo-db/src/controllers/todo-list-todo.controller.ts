import {service} from '@loopback/core';
import {Count, CountSchema, repository, Where} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Todo, TodoList} from '../models';
import {TodoListRepository} from '../repositories';
import {PaginateService} from '../services/paginate.service';

export class TodoListTodoController {
  constructor(
    @repository(TodoListRepository)
    protected todoListRepository: TodoListRepository,
    @service(PaginateService)
    public paginate: PaginateService,
  ) {}

  @get('/todo-lists/{id}/todos', {
    responses: {
      '200': {
        description: 'Array of TodoList has many Todo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Todo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.number('pageNumber') pageNumber: number,
    @param.query.number('pageSize') pageSize: number,
  ): Promise<Object> {
    const totalData = (await this.todoListRepository.todos(id).find()).length;
    return {
      totalPages: await this.paginate.calculateTotalPages(pageSize, totalData),
      todos: await this.todoListRepository.todos(id).find({
        limit: pageSize,
        skip: (pageNumber - 1) * pageSize,
      }),
    };
  }

  @post('/todo-lists/{id}/todos', {
    responses: {
      '200': {
        description: 'TodoList model instance',
        content: {'application/json': {schema: getModelSchemaRef(Todo)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TodoList.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo, {
            title: 'NewTodoInTodoList',
            exclude: ['id'],
            optional: ['todoListId'],
          }),
        },
      },
    })
    todo: Omit<Todo, 'id'>,
  ): Promise<Todo> {
    return this.todoListRepository.todos(id).create(todo);
  }

  @patch('/todo-lists/{id}/todos', {
    responses: {
      '200': {
        description: 'TodoList.Todo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo, {partial: true}),
        },
      },
    })
    todo: Partial<Todo>,
    @param.query.object('where', getWhereSchemaFor(Todo)) where?: Where<Todo>,
  ): Promise<Count> {
    return this.todoListRepository.todos(id).patch(todo, where);
  }

  @del('/todo-lists/{id}/todos', {
    responses: {
      '200': {
        description: 'TodoList.Todo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Todo)) where?: Where<Todo>,
  ): Promise<Count> {
    return this.todoListRepository.todos(id).delete(where);
  }
}
