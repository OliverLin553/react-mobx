import React from "react"
import { NavLink } from "react-router-dom"

export class Menu extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">
          state todolist
        </NavLink>
        <NavLink to="/mobx">
          mobx todolist
        </NavLink>
      </div>
    )
  }
}

export default Menu
