import React from "react"

import Space from "../layouts/space"

export default {
  title: "Layout/Space",
  component: Space,
}

const Template = (args) => <Space {...args} />
const TemplateHorizontal = (args) => <Space.Horizontal {...args} />
const TemplateVertical = (args) => <Space.Vertical {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 10,
  children: null,
  isVisible: true,
}

export const Horizontal = TemplateHorizontal.bind({})
Horizontal.args = {
  size: 10,
  children: null,
  isVisible: true,
}
export const Vertical = TemplateVertical.bind({})
Vertical.args = {
  size: 10,
  children: null,
  isVisible: true,
  maxHeight: 200,
}
