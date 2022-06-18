import React from "react"

import Button from "../atoms/button"

export default {
  title: "Atoms/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Button Default",
}

export const Primary = Template.bind({})
Primary.args = {
  type: "primary",
  children: "Button Primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: "secondary",
  children: "Button Secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: "tertiary",
  children: "Button tertiary",
}
