import { observable } from 'mobx'

class TodoListStore {
  @observable
  todos = [{
    id: 1,
    title: "todo标题"
  }, {
    id: 2,
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

  copyTodo(index) {
    this.todos.push({
      title: this.todos[index].title,
      id: this.todos[this.todos.length - 1].id + 1
    })
  }

  insertTodo(index) {
    this.todos.splice(index + 1, 0, { title: "", id: this.todos[index].id / 2 })
  }
}

export default new TodoListStore
