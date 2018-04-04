import React from "react"
import { observer, inject } from "mobx-react"

import TypeNew from "./TypeNew"
import ListTodo from "./ListTodo"

@inject("helperStore")
@observer
export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todolist: []
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      let allTask = this.state.todolist
      allTask.push(e.target.value)
      this.setState({
        todolist: allTask
      })
    }
  }

  render() {
    const { helperStore } = this.props
    console.log(helperStore.Assemblies)
    return (
      <div>
        <TypeNew onKeyDown={e => this.handleKeyDown(e)} todo={this.state.todolist} />
        <ListTodo todo={this.state.todolist} />
      </div>
    )
  }
}

export default List
