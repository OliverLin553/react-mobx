import React from "react"
import { observer, inject } from 'mobx-react'

import ListTodo from "./list_todo"
import style from "./style.css"

@inject(stores => ({
  todoListStore: stores.rootStore.todoListStore
}))
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
      this.AddTodoList()
      this.todoListInput.value = ""
    }
  }

  AddTodoList() {
    const { todoListStore } = this.props

    todoListStore.createPost({ title: this.todoListInput.value })
    this.todoListInput.value = ""
  }

  renderList() {
    const { todoListStore } = this.props

    return todoListStore.post.map((t, index) => (
      <ListTodo t={t} key={index} index={index} />
    ))
  }

  render() {
    return (
      <div className={style["mobx-todo-list"]}>
        <h1>
          mobx Todo list
        </h1>
        <ul>
          {this.renderList()}
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
