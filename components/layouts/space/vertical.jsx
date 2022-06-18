import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { choices } from "../../tokens/tokens"
import "./space.css"

const getsize = (size) => choices.spacing[size]

const Vertical = ({ size, children, maxHeight, isVisible }) => {
  return (
    <div
      className={classNames("vertical", { [["isVisible"]]: isVisible })}
      style={{ width: getsize(size), height: "100vh", maxHeight }}
    >
      {children}
    </div>
  )
}
Vertical.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
PropTypes.defaultProps = {
  size: 10,
  children: null,
  isVisible: false,
  maxHeight: 300,
}

export default Vertical
