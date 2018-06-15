import React from "react"

import { default as TypeNew } from "./type_new"
import { default as ListTodo } from "./list_todo"

import style from "./style.css"

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

  getInputValue() {
    return this.todoListInput.editField.value
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.addTodoList(this.getInputValue())
    }
  }

  hanleOnClick() {
    this.addTodoList(this.getInputValue())
  }

  addTodoList() {
    const allTask = this.state.todolist
    allTask.push({ name: this.getInputValue() })
    this.setState({
      todolist: allTask
    })

    this.todoListInput.editField.value = ""
  }

  render() {
    const { todolist } = this.state

    return (
      <div className={style["state-todo-list"]}>
        <h1>
          state Todo list
        </h1>
        <ListTodo todo={todolist} />
        <TypeNew
          ref={(node) => { this.todoListInput = node }}
          onKeyDown={e => this.handleKeyDown(e)}
          todo={todolist}
          onClick={() => { this.hanleOnClick() }}
        />
      </div>
    )
  }
}

export default List
