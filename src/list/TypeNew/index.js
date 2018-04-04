import React from "react"

export class TypeNew extends React.Component {
  render() {
    const { onKeyDown = () => {}} = this.props
    return (
      <div>
        <input type="text" placeholder="typing a newthing todo" onKeyDown={e => onKeyDown(e)} />
      </div>
    )
  }
}

export default TypeNew
