import React from "react"

import Input from "../atoms/input"

export default {
  title: "Atoms/Input",
  component: Input,
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "text",
  placeholder: "Enter your name",
}

export const Password = Template.bind({})
Password.args = {
  type: "password",
  placeholder: "Enter your password",
}
