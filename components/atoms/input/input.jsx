import React from "react"
import PropTypes from "prop-types"

import "./input.css"

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

PropTypes.Input = {
  type: PropTypes.oneOf(["text", "password"]).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
PropTypes.defaultProps = {
  type: "text",
  placeholder: "",
  value: "",
  onChange: () => {},
}
export default Input
