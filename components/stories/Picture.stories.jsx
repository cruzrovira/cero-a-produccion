import React from "react"

import Picture from "../atoms/picture"

export default {
  title: "Atoms/Picture",
  component: Picture,
}

const Template = (args) => <Picture {...args} />

export const Default = Template.bind({})
Default.args = {
  alt: "Imagen Default",
  src: "https://picsum.photos/id/1/200/300",
  width: "200px",
}
