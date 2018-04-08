import React from "react"
import { observer, inject } from "mobx-react"
import { Route, withRouter } from "react-router-dom"
import styles from "./style.css"

import List from "../components/list"
import Menu from "../components/menu"
import MobxList from "../components/mobx_list"

@inject("helperStore", "todoListStore")
@withRouter
@observer
export class App extends React.Component {
  componentDidMount() {
    this.props.helperStore.loadCategories()
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
