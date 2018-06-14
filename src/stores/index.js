import { default as TodoListStore } from "./todo_list"

export default class RootStore {
  constructor() {
    this.todoListStore = new TodoListStore(this)
  }
}
