import React from "react"
import PropTypes from "prop-types"

const Banner = ({ className, title }) => {
    return (
        <div className={className}>
            <div className="bannerOverlay"></div>
            <h2>{title}</h2>
        </div>
    )
}

Banner.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
}
export default Banner
