import render from "react-test-renderer"

import Button from "./button"
describe("test de botton", () => {
  it("Button Default", () => {
    const button = render.create(<Button> Button Default </Button>)
    expect(button.toJSON()).toMatchSnapshot()
  })

  it("Button Primary ", () => {
    const button = render.create(
      <Button type="primary"> Button primary </Button>
    )
    expect(button.toJSON()).toMatchSnapshot()
  })

  it("Button Secondary ", () => {
    const button = render.create(
      <Button type="secondary"> Button Secondary </Button>
    )
    expect(button.toJSON()).toMatchSnapshot()
  })

  it("Button Tertiary ", () => {
    const button = render.create(
      <Button type="tertiary"> Button Tertiary </Button>
    )
    expect(button.toJSON()).toMatchSnapshot()
  })
})
