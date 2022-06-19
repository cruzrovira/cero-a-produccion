import React from "react"
import PropTypes from "prop-types"

import styles from "./picture.module.css"

const getWidth = (Width) => (typeof Width === "string" ? Width : `${Width}px`)

const Picture = ({ alt, src, width }) => {
  return (
    <picture>
      <img
        alt={alt}
        className={styles["picture-img"]}
        src={src}
        style={{ maxWidth: getWidth(width) }}
      />
    </picture>
  )
}
Picture.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Picture
