import React from "react"

import style from "./style.css"

export class ListTodo extends React.Component {
  handleOnClick(index) {
    const { todo } = this.props
    todo.splice(index, 1)
    this.setState(todo)
  }

  renderTodoList() {
    const { todo } = this.props
    return todo.map((item, index) => (
      <li key={item.id} className={style["todo-list"]}>
        <label>{item.name}</label>
        <div onClick={() => this.handleOnClick(index)} className={style.del}>×</div>
      </li>
    ))
  }

  render() {
    return (
      <div>
        <ul className={style["todo-list-component"]}>
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

export default ListTodo
