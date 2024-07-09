import React from "react"
import PropTypes from "prop-types"

/** Ce component permet de créer une bannière avec des variables spécifiques **/
const Banner = ({ className, title, imgUrl }) => {
    return (
        <div className={className}>
            <img src={imgUrl} alt="Banner image" />
            <div className="bannerOverlay"></div>
            <h2>{title}</h2>
        </div>
    )
}
/** Cette partie permet de déterminer le type des variables (string, number...) **/
Banner.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    imgUrl: PropTypes.string,
}
export default Banner
