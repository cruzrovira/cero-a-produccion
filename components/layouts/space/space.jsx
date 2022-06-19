import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { choices } from "../../tokens/tokens"

import Horizontal from "./horizontal"
import Vertical from "./vertical"
import styles from "./space.module.css"

const getsize = (size) => choices.spacing[size]

const Space = ({ size, children, isVisible }) => {
  return (
    <div
      className={classNames(styles.space, { [styles.isVisible]: isVisible })}
      style={{ width: getsize(size), height: getsize(size) }}
    >
      {children}
    </div>
  )
}
Space.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  isVisible: PropTypes.bool,
}
PropTypes.defaultProps = {
  size: 10,
  children: null,
  isVisible: false,
}

Space.Horizontal = Horizontal
Space.Vertical = Vertical
export default Space
