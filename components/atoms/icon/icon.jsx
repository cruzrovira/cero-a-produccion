import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { mapSize } from "./mapSize"
import { mapIcon } from "./mapIcon"
import "./icon.css"

const Icon = ({ icon, color, size, hasBackground, ...props }) => {
  const selectColor =
    color === "primary" ? "var(--colors-primary)" : "var(--colors-eastbay)"

  return (
    <div className={classNames("icon", { [["hasBackground"]]: hasBackground })}>
      {mapIcon(icon, selectColor, mapSize(size), props)}
    </div>
  )
}
Icon.propTypes = {
  icon: PropTypes.oneOf([
    "angle-down",
    "angle-up",
    "angle-left",
    "arrow-right",
    "arrow-up",
    "check-circle",
    "clock",
    "cross",
    "grip",
    "home",
    "pause-circle",
    "play",
    "plus-circle",
    "reports",
    "settings",
    "tag",
    "tasks",
    "trash",
    "user",
  ]),
  color: PropTypes.oneOf(["primary", "eastbay"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  icon: "arrow-left",
  size: "sm",
  color: "eastbay",
  hasBackground: false,
}
export default Icon
