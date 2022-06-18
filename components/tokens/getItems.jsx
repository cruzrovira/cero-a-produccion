const { toKebabCase } = require("./toKebabCase.jsx")

function getItems(choices, parenKey = "") {
  const choicesKey = Object.keys(choices)
  return choicesKey.reduce((cc, key) => {
    if (Array.isArray(choices[key])) {
      const items = choices[key].join(",")
      return `${cc}-${toKebabCase(parenKey)}-${toKebabCase(key)}:${items};`
    } else if (typeof choices[key] === "object") {
      return `${cc}\n${getItems(
        choices[key],
        `${toKebabCase(parenKey)}-${toKebabCase(key)}`
      )}`
    }
    return `${cc}-${toKebabCase(parenKey)}-${toKebabCase(key)}:${
      choices[key]
    };\n`
  }, "")
}

module.exports = { getItems }
