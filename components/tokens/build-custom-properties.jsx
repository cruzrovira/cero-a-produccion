const fs = require("fs")

const { choices, decisions } = require("../tokens/tokens.jsx")

const { getItems } = require("./getItems.jsx")

const customProperties = `${getItems(choices)}${getItems(decisions)}`

const data = `:root{\n${customProperties} }`

fs.writeFile("./styles/tokens.css", data, "utf-8", function (err) {
  if (err) {
    return console.log(err)
  }
  console.log("The file was saved!")
})
