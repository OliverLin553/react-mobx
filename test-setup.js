const hook = require("css-modules-require-hook")
const { JSDOM } = require("jsdom")

const noop = () => {}

require.extensions[".ico"] = noop
require.extensions[".png"] = noop
require.extensions[".svg"] = noop

let css = ""

hook({
  generateScopedName: "[local]",
  preprocessCss: (data) => {
    css += data
    return css
  }
})

const jsdom = new JSDOM("<!doctype html><html><body></body></html>")
const { window } = jsdom

global.window = window
global.document = window.document
global.navigator = {
  userAgent: "node.js"
}

const Enzyme = require("enzyme")
const Adapter = require("enzyme-adapter-react-16")

Enzyme.configure({ adapter: new Adapter() })
