import {Entity, belongsTo, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model({
  settings: {
    foreignKeys: {
      fkTodoListId: {
        name: 'fk_todo_todoListId',
        entity: 'TodoList',
        entityKey: 'id',
        foreignKey: 'todolistid',
      },
    },
  },
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  isComplete: boolean;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  todoList?: TodoListWithRelations;
}

export type TodoWithRelations = Todo & TodoRelations;
