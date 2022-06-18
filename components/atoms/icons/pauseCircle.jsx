import React from "react"

const PauseCircle = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 28 28"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Pause-Circle"}</title>
      <path
        clipRule="evenodd"
        d="M27.86 13.93C27.86 21.6108 21.6108 27.86 13.93 27.86C6.24916 27.86 -2.73159e-07 21.6108 -6.08899e-07 13.93C-9.44639e-07 6.24917 6.24916 1.6893e-05 13.93 1.65572e-05C21.6108 1.62215e-05 27.86 6.24917 27.86 13.93ZM1.53041 13.93C1.53041 20.7675 7.09253 26.3296 13.93 26.3296C20.7674 26.3296 26.3296 20.7675 26.3296 13.93C26.3296 7.09254 20.7674 1.53042 13.93 1.53042C7.09252 1.53042 1.5304 7.09254 1.53041 13.93Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M10 19L10 9L12 9L12 19L10 19Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M16 19L16 9L18 9L18 19L16 19Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { PauseCircle }
