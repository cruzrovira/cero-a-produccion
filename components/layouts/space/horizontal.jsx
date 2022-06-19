import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { choices } from "../../tokens/tokens"

import styles from "./space.module.css"

const getsize = (size) => choices.spacing[size]

const Horizontal = ({ size, children, isVisible }) => {
  return (
    <div
      className={classNames(styles.horizontal, {
        [styles.isVisible]: isVisible,
      })}
      style={{ width: "100%", height: getsize(size) }}
    >
      {children}
    </div>
  )
}
Horizontal.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  isVisible: PropTypes.bool,
}
PropTypes.defaultProps = {
  size: 10,
  children: null,
  isVisible: false,
}

export default Horizontal
