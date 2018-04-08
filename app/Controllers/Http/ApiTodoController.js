'use strict'

const Todo = use('App/Models/Todo');

class ApiTodoController {

  async index({response}) {

    const todos = await Todo.all();

    return response.send(todos.toJSON());

  }
}

module.exports = ApiTodoController;
