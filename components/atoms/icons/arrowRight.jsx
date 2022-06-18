import React from "react"

const ArrowRight = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 19 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Arrow-Right"}</title>
      <path
        clipRule="evenodd"
        d="M8.65792 19.316L7.34192 18L15.6849 9.658L7.34192 1.316L8.65792 0L18.3149 9.658L8.65792 19.316Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M0 8.65796H17V10.658H0V8.65796Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { ArrowRight }
