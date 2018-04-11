import React from "react"
import { observer, inject } from 'mobx-react'
import style from "./style.css"

@inject("todoListStore")
@observer
export class ListTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  handleTitleClick() {
    this.setState({
      edit: true
    })
  }

  handleOnClick(e, index) {
    e.stopPropagation()
    this.props.todoListStore.deleteTodo(index)
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.todoListStore.updateTodo(this.props.index, e.target.value)

      this.setState({
        edit: false
      })
    }
  }

  renderTodoList(t) {
    if (this.state.edit) {
      return (
        <input type="text" onKeyDown={(e) => this.handleKeyDown(e)} />
      )
    }

    return (
      <label>{t.title}</label>
    )
  }

  render() {
    const { index, t } = this.props

    return (
      <li className={style["todo-list"]} onClick={() => this.handleTitleClick()}>
        {this.renderTodoList(t)}
        <div onClick={(e) => this.handleOnClick(e, index)} className={style.del}>×</div>
      </li>
    )
  }
}

export default ListTodo
