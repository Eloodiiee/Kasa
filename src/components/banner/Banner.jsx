import React from "react"
import PropTypes from "prop-types"

const Banner = ({ className, title, imgUrl }) => {
    return (
        <div className={className}>
            <img src={imgUrl} alt="Banner image" />
            <div className="bannerOverlay"></div>
            <h2>{title}</h2>
        </div>
    )
}

Banner.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
}
export default Banner
