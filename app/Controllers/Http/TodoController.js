'use strict'

const { validateAll } = use('Validator');

const Todo = use('App/Models/Todo');

class TodoController {

  async apiIndex({view}) {
    return view.render('todos.api-index')
  }

  async index({view}) {

    const todos = await Todo.all();

    return view.render('todos.index', {todos: todos.toJSON() });
  }

  async store({request, response, session}) {

    const data = request.all();

    const rules = {body: 'required|min:6'};

    const messages = {
      'body.required': 'A tarefa deve conter um título.',
      'body.min': 'O título deve conter no mínimo6 caracteres.'
    };

    const validation = await validateAll(data, rules, messages);

    if(validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect('back')
    }

    await Todo.create({
      body: data.body
    });

    session.flash({success: 'Tarefa adicionada com sucesso!'});

    return response.redirect('back');

  }
}

module.exports = TodoController;
