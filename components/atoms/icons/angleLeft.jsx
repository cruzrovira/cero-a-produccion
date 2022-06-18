import React from "react"

const AngleLeft = (props) => {
  return (
    <svg
      height={32}
      viewBox="-3 0 20 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Angle-Left"}</title>
      <path
        clipRule="evenodd"
        d="M9.707 19.414L0 9.707L9.707 0L11.121 1.414L2.828 9.707L11.121 18L9.707 19.414Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { AngleLeft }
