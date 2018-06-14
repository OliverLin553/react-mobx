import { observable, action, configure, values, runInAction, computed } from "mobx"
import * as client from "../../client"

configure({ enforceActions: true })

class TodoListStore {
  constructor(rootStore) {
    this.rootStore = rootStore
  }

  @observable
  postsRegistry = observable.map()

  @observable
  isLoading = false

  @computed
  get post() {
    return values(this.postsRegistry)
  }

  @action
  async loadPosts() {
    this.isLoading = true

    try {
      const { data } = await client.fetchPosts()

      if (data) {
        runInAction(() => {
          this.postsRegistry.clear()
          data.forEach((p) => {
            this.postsRegistry.set(p.id, p)
          })
        })

        return data
      }

      throw new Error(message)
    } catch (err) {
      throw err.message || (err.response && err.response.body && err.response.body.errors)
    } finally {
      runInAction(() => {
        this.isLoading = false
      })
    }
  }

  @action
  async createPost(post) {
    try {
      const { data } = await client.createPost(post)

      if (data) {
        console.log(data)
        runInAction(() => {
          this.postsRegistry.set(data.id, data)
        })

        return data
      }

      throw new Error(message)
    } catch (err) {
      throw err.message || (err.response && err.response.body && err.response.body.errors)
    }
  }

  @action
  async updatePosts(id, updateData) {
    try {
      const { data } = await client.updatePosts(id, updateData)

      if (data) {
        runInAction(() => {
          this.postsRegistry.set(data.id, data)
        })

        return data
      }

      throw new Error(message)
    } catch (err) {
      throw err.message || (err.response && err.response.body && err.response.body.errors)
    }
  }

  @action
  addTodo(id, title) {
    this.todos.set(id, title)
  }

  @action
  deleteTodo(index) {
    this.todos.splice(index, 1)
  }

  @action
  updateTodo(index, value) {
    this.todos[index].title = value
  }

  @action
  copyTodo(index) {
    this.todos.push({
      title: this.todos[index].title,
      id: this.todos[this.todos.length - 1].id + 1
    })
  }

  @action
  insertTodo(index) {
    this.todos.splice(index + 1, 0, { title: "", id: this.todos[index].id / 2 })
  }
}

export default TodoListStore
