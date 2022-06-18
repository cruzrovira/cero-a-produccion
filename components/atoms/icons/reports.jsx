import React from "react"

const Reports = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 20 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Reports"}</title>
      <rect
        className="transparent"
        height="7"
        rx="0.5"
        width="3"
        x="2.5"
        y="8.5"
      />
      <rect
        className="transparent"
        height="11"
        rx="0.5"
        width="3"
        x="8.5"
        y="4.5"
      />
      <rect
        className="transparent"
        height="15"
        rx="0.5"
        width="3"
        x="14.5"
        y="0.5"
      />
      <line x2="21" y1="15.5" y2="15.5" />
    </svg>
  )
}

export { Reports }
