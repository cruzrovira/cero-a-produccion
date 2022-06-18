import React from "react"

import Icon from "../atoms/icon"

export default {
  title: "Atoms/Icon",
  component: Icon,
}

const Template = (args) => <Icon {...args} />
export const Default = Template.bind({})
Default.args = {
  icon: "home",
}

export const Primary = Template.bind({})
Primary.args = {
  icon: "home",
  color: "primary",
  size: "md",
}

export const HasBackground = Template.bind({})
HasBackground.args = {
  icon: "home",
  color: "primary",
  size: "md",
  hasBackground: true,
}
