import React from "react"
import PropTypes from "prop-types"

import Icon from "../../atoms/icon"

import "./dropdown.css"

const Dropdown = ({ options, onChange }) => {
  return (
    <div className="dropdown">
      <select className="dropdown-select" onChange={onChange}>
        {options.map(({ id, value, text }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </select>
      <div className="dropdown-icon">
        <Icon
          color="primary"
          hasBackground={true}
          icon="angle-down"
          size="md"
        />
      </div>
    </div>
  )
}
Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}
PropTypes.defaultProps = {
  options: [],
  onChange: () => {},
}

export default Dropdown
