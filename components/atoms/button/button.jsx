import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./button.css"

const Button = ({ type, children }) => {
  return (
    <button className={classNames("button", { [[`type-${type}`]]: type })}>
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  children: "button",
}

export default Button
