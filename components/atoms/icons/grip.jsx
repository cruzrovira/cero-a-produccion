import React from "react"

const Grip = (props) => {
  return (
    <svg
      height={32}
      viewBox="-2 0 14 15"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Grip"}</title>
      <path d="M0 14V12H2V14H0ZM4 14V12H6V14H4ZM8 14V12H10V14H8ZM0 10V8H2V10H0ZM4 10V8H6V10H4ZM8 10V8H10V10H8ZM0 6V4H2V6H0ZM4 6V4H6V6H4ZM8 6V4H10V6H8ZM0 2V0H2V2H0ZM4 2V0H6V2H4ZM8 2V0H10V2H8Z" />
    </svg>
  )
}

export { Grip }
