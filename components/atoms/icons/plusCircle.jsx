import React from "react"

const PlusCircle = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 20 20"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Plus-Circle"}</title>
      <path
        clipRule="evenodd"
        d="M10 20C4.48612 20 0 15.5139 0 10C0 4.48612 4.48612 0 10 0C15.5139 0 20 4.48612 20 10C20 15.5139 15.5139 20 10 20ZM10 1.09864C5.09155 1.09864 1.09864 5.09155 1.09864 10C1.09864 14.9084 5.09155 18.9014 10 18.9014C14.9084 18.9014 18.9014 14.9084 18.9014 10C18.9014 5.09155 14.9084 1.09864 10 1.09864Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M4.68396 9.4093H15.316V10.5906H4.68396V9.4093Z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M9.40942 4.68396H10.5908V15.316H9.40942V4.68396Z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export { PlusCircle }
