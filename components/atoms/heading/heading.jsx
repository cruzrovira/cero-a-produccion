import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./heading.module.css"

const Heading = ({ children, size, color }) => {
  return (
    <heading
      className={classNames(styles.heading, {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
      })}
    >
      {children}
    </heading>
  )
}

Heading.propTypes = {
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  color: PropTypes.oneOf(["primary"]),
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  children: "Heading ",
  size: "md",
  color: "default",
}

export default Heading
