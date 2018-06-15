import React from "react"
import { observer, inject } from "mobx-react"
import { Route, withRouter } from "react-router-dom"
import styles from "./style.css"

import { default as List } from "../components/list"
import { default as Menu } from "../components/menu"
import { default as MobxList } from "../components/mobx_list"

@withRouter
@inject(stores => ({
  todoListStore: stores.rootStore.todoListStore
}))
@observer
export class App extends React.Component {
  componentDidMount() {
    this.props.todoListStore.loadPosts()
  }

  render() {
    return (
      <div className={styles.app}>
        <Menu />
        <Route exact path="/" component={List} />
        <Route exact path="/mobx" component={MobxList} />
      </div>
    )
  }
}

export default App
