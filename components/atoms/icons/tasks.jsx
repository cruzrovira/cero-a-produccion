import React from "react"

const Tasks = (props) => {
  return (
    <svg
      height={32}
      viewBox="-1 -3 20 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Tasks"}</title>
      <circle cx="1" cy="11" r="1" />
      <circle cx="1" cy="6" r="1" />
      <circle cx="1" cy="1" r="1" />
      <line strokeLinecap="round" x1="5.5" x2="18.5" y1="1.5" y2="1.5" />
      <line strokeLinecap="round" x1="5.5" x2="18.5" y1="6.5" y2="6.5" />
      <line strokeLinecap="round" x1="5.5" x2="18.5" y1="11.5" y2="11.5" />
    </svg>
  )
}

export { Tasks }
