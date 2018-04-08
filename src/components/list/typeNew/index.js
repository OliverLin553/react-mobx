import React from "react"

import style from "./style.css"

export class TypeNew extends React.Component {
  render() {
    const { onKeyDown = () => {}, onClick = () => {}} = this.props

    return (
      <div className={style["typenew"]}>
        <div className={style.title}>Add to the todo list</div>
        <input
          ref={(node) => { this.editField = node }}
          type="text"
          placeholder="typing a newthing todo"
          onKeyDown={e => onKeyDown(e)} />
        <span className={style.btn} onClick={() => onClick()}>ADD</span>
      </div>
    )
  }
}

export default TypeNew
