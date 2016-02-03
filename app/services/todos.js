import Ember from 'ember';

export default Ember.Service.extend({
  todos: ['one'],

  addTodo(todo) {
    this.get('todos').pushObject(todo);
  }
});
