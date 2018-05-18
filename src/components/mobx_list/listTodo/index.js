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

  componentDidUpdate() {
    if(this.state.edit) {
      this.todoListInput.focus()
      this.todoListInput.value = this.props.t.title
    }
  }

  handleTitleClick() {
    this.setState({
      edit: true
    })
  }

  handleOnBlur(e) {
    if(e.target.value !== this.props.t.title) {
      this.props.todoListStore.updateTodo(this.props.index, e.target.value)
    }

    this.setState({
      edit: false
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

  handleCopyClick(e) {
    e.stopPropagation()

    this.props.todoListStore.copyTodo(this.props.index)
  }

  handleInsert(e) {
    e.stopPropagation()

    this.props.todoListStore.insertTodo(this.props.index)
  }

  renderTodoList(t) {
    if (this.state.edit) {
      return (
        <input
          ref={(node) => {
            this.todoListInput = node
          }}
          type="text"
          onBlur={(e) => this.handleOnBlur(e)}
          onKeyDown={(e) => this.handleKeyDown(e)} />
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
        <div className={style["todo-right"]}>
          <div className={style.copy} onClick={(e) => this.handleCopyClick(e)}>Copy</div>
          <div className={style["insert-todo"]} onClick={(e) => this.handleInsert(e)}>+</div>
          <div onClick={(e) => this.handleOnClick(e, index)} className={style.del}>×</div>
        </div>
      </li>
    )
  }
}

export default ListTodo
