import React from "react"
import { observer, inject } from "mobx-react"
import styles from "./style.css"

import List from "../list"

@inject("helperStore")
@observer
export class App extends React.Component {
  componentDidMount() {
    this.props.helperStore.loadCategories()
  }

  render() {
    return (
      <div className={styles.app}>
        <List />
      </div>
    )
  }
}

export default App
