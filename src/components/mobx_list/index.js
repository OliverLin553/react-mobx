import React from "react"
import { observer, inject } from 'mobx-react'

import ListTodo from "./listTodo"
import style from "./style.css"

@inject("todoListStore")
@observer
export class MobxList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.AddTodoList(e)
      this.todoListInput.value = ""
    }
  }

  AddTodoList(e, index) {
    this.props.todoListStore.addTodo(e.target.value, index)
  }


  render() {
    const { todoListStore } = this.props

    return (
      <div className={style["mobx-todo-list"]}>
        <h1>
          mobx Todo list
        </h1>
        <ul>
          {todoListStore.todos.map((t, index) => {
            return (
              <ListTodo t={t} key={index} index={index}  />
            )
          })}
        </ul>
        <div className={style.title}>Add to the todo list</div>
        <input
          className={style["mobx-input"]}
          ref={(node) => {
            this.todoListInput = node
          }}
          onKeyDown={(e) => this.handleKeyDown(e)} />
        <span className={style.btn} onClick={(e) => this.AddTodoList(e)}>ADD</span>
      </div>
    )
  }
}

export default MobxList
