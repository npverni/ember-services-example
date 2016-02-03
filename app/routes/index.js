import Ember from 'ember';

export default Ember.Route.extend({
  todos: Ember.inject.service(),

  model(){
    return this.get('todos.todos');
  },

  actions: {
    click() {
      this.get('todos').addTodo('foo');
    }
  }
});
