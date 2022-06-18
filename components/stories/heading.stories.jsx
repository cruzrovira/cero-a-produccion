import React from "react"

import Heading from "../atoms/heading"

export default {
  title: "Atoms/Heading",
  component: Heading,
}

const Template = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Heading default ",
}

export const Primary = Template.bind({})
Primary.args = {
  children: "Heading primary ",
  color: "primary",
  size: "md",
}
