import React from "react"
import { PropTypes } from "prop-types"

import Icon from "../../atoms/icon"
import Button from "../../atoms/button"

const ButtonIcon = ({
  children,
  typeButon,
  icon,
  colorIcon,
  sizeIcon,
  hasBackgroundIcon,
}) => {
  return (
    <Button type={typeButon}>
      {children}
      <Icon
        color={colorIcon}
        hasBackground={hasBackgroundIcon}
        icon={icon}
        size={sizeIcon}
      />
    </Button>
  )
}
ButtonIcon.propTypes = {
  children: PropTypes.node,
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
  colorIcon: PropTypes.oneOf(["primary", "eastbay"]),
  typeButon: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  sizeIcon: PropTypes.oneOf(["sm", "md", "lg", "xl"]).isRequired,
  hasBackground: PropTypes.bool,
}
ButtonIcon.defaultProps = {
  children: "buton Icon",
  icon: "user",
  colorIcon: "eastbay",
  typeButon: "primary",
  sizeIcon: "sm",
  hasBackground: false,
}

export default ButtonIcon
