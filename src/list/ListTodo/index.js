import React from "react"

export class ListTodo extends React.Component {
  handleOnClick(index) {
    const todo = this.props.todo
    todo.splice(index, 1)
    this.setState(todo)
  }

  renderTodoList() {
    return this.props.todo.map((item, index) => {
      return (
        <li key={index}>
          <label>{item}</label>
          <div onClick={() => this.handleOnClick(index)}>delete</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul id="todo-list">
          {this.renderTodoList()}
        </ul>
      </div>
    )
  }
}

export default ListTodo
