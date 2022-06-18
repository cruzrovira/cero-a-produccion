import React from "react"

import Dropdown from "../molecules/dropdown"

export default {
  title: "Molecules/Dropdown",
  component: Dropdown,
}

const Template = (args) => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {
  onchange: () => {},
  options: [
    { id: "1", value: "1", text: "8:00 AM" },
    { id: "2", value: "2", text: "9:00 AM" },
    { id: "3", value: "3", text: "10:00 AM" },
  ],
}
