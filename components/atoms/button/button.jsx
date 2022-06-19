import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./button.module.css"

const Button = ({ type, children }) => {
  return (
    <button
      className={classNames(styles.button, { [styles[`type-${type}`]]: type })}
    >
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
