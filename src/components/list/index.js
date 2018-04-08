import React from "react"
import { observer, inject } from "mobx-react"

import TypeNew from "./TypeNew"
import ListTodo from "./ListTodo"

import style from "./style.css"

@inject("helperStore")
@observer
export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todolist: [{
        id: 1,
        name: "123"
      }, {
        id: 2,
        name: "hello"
      }]
    }
  }

  handleKeyDown(e) {
    if (e.keyCode == 13) {
      this.addTodoList(this.getInputValue())
    }
  }

  hanleOnClick() {
    this.addTodoList(this.getInputValue())
  }

  addTodoList() {
    let allTask = this.state.todolist
    allTask.push({ name: this.getInputValue() })
    this.setState({
      todolist: allTask
    })

    this.todoListInput.editField.value = ""
  }

  getInputValue() {
    return this.todoListInput.editField.value
  }

  render() {
    // const { helperStore } = this.props
    // console.log(helperStore.Assemblies)
    return (
      <div className={style["state-todo-list"]}>
        <h1>
          state Todo list
        </h1>
        <ListTodo todo={this.state.todolist} />
        <TypeNew
          ref={(node) => { this.todoListInput = node }}
          onKeyDown={e => this.handleKeyDown(e)}
          todo={this.state.todolist}
          onClick={() => this.hanleOnClick()} />
      </div>
    )
  }
}

export default List
