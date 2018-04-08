import { observable } from 'mobx'

class TodoListStore {
  @observable
  todos = [{
    title: "todo标题",
    done: false
  }, {
    title: "123"
  }]

  addTodo(title) {
    this.todos.push({ title: title })
  }

  deleteTodo(index) {
    this.todos.splice(index, 1)
  }
}

export default new TodoListStore
