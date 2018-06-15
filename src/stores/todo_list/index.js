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

      throw new Error()
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
        runInAction(() => {
          this.postsRegistry.set(data.id, data)
        })

        return data
      }

      throw new Error()
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

      throw new Error()
    } catch (err) {
      throw err.message || (err.response && err.response.body && err.response.body.errors)
    }
  }


  @action
  async deletePost(id) {
    try {
      const { data } = await client.deletePost(id)

      if (data) {
        runInAction(() => {
          this.postsRegistry.delete(id)
        })

        return data
      }

      throw new Error()
    } catch (err) {
      throw err.message || (err.response && err.response.body && err.response.body.errors)
    }
  }
}

export default TodoListStore
