import React from "react"

import ButtonIcon from "../molecules/buttonIcon"

export default {
  title: "Molecules/ButtonIcon",
  component: ButtonIcon,
}

const Template = (args) => <ButtonIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "buton Icon",
  icon: "user",
}
