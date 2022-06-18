import React from "react"

import Space from "../layouts/space"

export default {
  title: "Layout/Space",
  component: Space,
}

const Template = (args) => <Space {...args} />

export const Default = Template.bind({})
Default.args = {}
