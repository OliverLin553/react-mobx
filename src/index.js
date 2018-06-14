import React from "react"
import { render } from "react-dom"
import { Provider } from "mobx-react"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap-theme.css"

import { default as App } from "./app"
import { default as RootStore } from "./stores"

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider rootStore={new RootStore()}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept("./app", () => {
    renderApp(App)
  })
}

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!")
}
