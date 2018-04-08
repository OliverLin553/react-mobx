import React from "react"
import { observer, inject } from 'mobx-react'
import style from "./style.css"

@inject("todoListStore")
@observer
export class MobxList extends React.Component {
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.AddTodoList(event)
      this.todoListInput.value = ""
    }
  }

  handleOnClick(index) {
    this.props.todoListStore.deleteTodo(index)
  }

  AddTodoList(event) {
    this.props.todoListStore.addTodo(event.target.value)
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
              <li key={index} className={style["todo-list"]}>
                <label>{t.title}</label>
                <div onClick={() => this.handleOnClick(index)}>delete</div>
              </li>
            )
          })}
        </ul>
        <div className={style.title}>Add to the todo list</div>
        <input
          className={style["mobx-input"]}
          ref={(node) => { this.todoListInput = node }}
          onKeyDown={(event) => this.handleKeyDown(event)} />
        <span className={style.btn} onClick={(event) => this.AddTodoList(event)}>ADD</span>
      </div>
    )
  }
}

export default MobxList
