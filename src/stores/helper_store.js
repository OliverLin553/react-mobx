import { observable, action } from "mobx"
import * as client from "../client"

class HelperStore {
  @observable
  helperErrors = undefined
  @observable
  isLoadingComments = false

  @action
  loadCategories() {
    this.isLoadingComments = true
    this.categoryErrors = undefined

    return client.fetchAssemblies().then(action(({ data }) => {
      const Assemblies = data.data
      this.Assemblies = Assemblies || this.Assemblies
    }))
      .catch(action((err) => {
        this.Assemblies = err.response && err.response.body && err.response.body.errors
        throw err
      }))
      .finally(action(() => {
        this.isLoadingComments = false
      }))
  }
}

export default new HelperStore()
