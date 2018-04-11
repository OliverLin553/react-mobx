import { observable } from 'mobx'

class TodoListStore {
  @observable
  todos = [{
    id: 0,
    title: "todo标题",
    done: false
  }, {
    id: 1,
    title: "123"
  }]

  addTodo(title) {
    this.todos.push({ title: title })
  }

  deleteTodo(index) {
    this.todos.splice(index, 1)
  }

  updateTodo(index, value) {
    this.todos[index].title = value
  }
}

export default new TodoListStore
