import React from "react"

const CheckCircle = (props) => {
  return (
    <svg
      height={32}
      viewBox="5 1 20 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Check-Circle"}</title>
      <path
        clipRule="evenodd"
        d="M14.93 20.86C9.45472 20.86 5 16.4053 5 10.93C5 5.45472 9.45472 1 14.93 1C20.4053 1 24.86 5.45472 24.86 10.93C24.86 16.4053 20.4053 20.86 14.93 20.86ZM14.93 2.09095C10.0559 2.09095 6.09095 6.05591 6.09095 10.93C6.09095 15.8041 10.0559 19.769 14.93 19.769C19.8041 19.769 23.769 15.8041 23.769 10.93C23.769 6.05591 19.8041 2.09095 14.93 2.09095Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M13.744 15.221L8.67871 10.1423L9.45059 9.37155L13.7458 13.6773L20.41 7.01251L21.1807 7.78439L13.744 15.221Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { CheckCircle }
