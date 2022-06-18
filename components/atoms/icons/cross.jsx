import React from "react"

const Cross = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 28 28"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Cross"}</title>
      <path
        clipRule="evenodd"
        d="M1.65702 27.6578L0.343018 26.3418L26.343 0.341797L27.657 1.6578L1.65702 27.6578Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M26.343 27.6578L0.343018 1.6578L1.65702 0.341797L27.657 26.3418L26.343 27.6578Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { Cross }
