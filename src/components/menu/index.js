import React from "react"
import { NavLink } from "react-router-dom"
import style from "./style.css"

export class Menu extends React.Component {
  render() {
    return (
      <div className={style["menu-component"]}>
        <NavLink to="/" activeClassName={style["active"]} exact>
          state todolist
        </NavLink>
        <NavLink to="/mobx" activeClassName={style["active"]}>
          mobx todolist
        </NavLink>
      </div>
    )
  }
}

export default Menu
