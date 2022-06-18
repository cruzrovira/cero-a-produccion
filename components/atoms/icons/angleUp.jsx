import React from "react"

const AngleUp = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 9 6"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Angle-Up"}</title>
      <path
        clipRule="evenodd"
        d="M8.28864 5.121L4.46988 1.30224L0.651119 5.121L0 4.46988L4.46988 0L8.93976 4.46988L8.28864 5.121Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { AngleUp }
