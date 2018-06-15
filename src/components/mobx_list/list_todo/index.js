import React from "react"
import { observer, inject } from "mobx-react"
import style from "./style.css"

@inject(stores => ({
  todoListStore: stores.rootStore.todoListStore
}))
@observer
export class ListTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false
    }
  }

  componentDidUpdate() {
    if (this.state.edit) {
      this.todoListInput.focus()
      this.todoListInput.value = this.props.post.title
    }
  }

  handleTitleClick() {
    this.setState({
      edit: true
    })
  }

  handleOnBlur(e) {
    const { post, todoListStore } = this.props

    if (e.target.value !== post.title) {
      todoListStore.updatePosts(post.id, { title: e.target.value })
    }

    this.setState({
      edit: false
    })
  }

  handleOnClick(e) {
    const { post, todoListStore } = this.props

    e.stopPropagation()
    todoListStore.deletePost(post.id)
  }

  handleKeyDown(e) {
    const { post, todoListStore } = this.props

    if (e.keyCode === 13) {
      todoListStore.updatePosts(post.id, { title: e.target.value })

      this.setState({
        edit: false
      })
    }
  }

  handleCopyClick(e) {
    const { post, todoListStore } = this.props

    e.stopPropagation()

    todoListStore.createPost({ title: post.title })
  }

  renderTodoList() {
    const { post } = this.props

    if (this.state.edit) {
      return (
        <input
          ref={(node) => {
            this.todoListInput = node
          }}
          type="text"
          onBlur={(e) => { this.handleOnBlur(e) }}
          onKeyDown={(e) => { this.handleKeyDown(e) }}
        />
      )
    }

    return (
      <label>{post.title}</label>
    )
  }

  render() {
    return (
      <li className={style["todo-list"]} onClick={() => { this.handleTitleClick() }}>
        {this.renderTodoList()}
        <div className={style["todo-right"]}>
          <div className={style.copy} onClick={(e) => { this.handleCopyClick(e) }}>Copy</div>
          <div onClick={(e) => { this.handleOnClick(e) }} className={style.del}>×</div>
        </div>
      </li>
    )
  }
}

export default ListTodo
