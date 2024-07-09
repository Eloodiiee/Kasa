import PropTypes from "prop-types"
import leftArrow from "../../assets/images/arrow-left.svg"
import rightArrow from "../../assets/images/arrow-right.svg"
import { useState } from "react"

/** Ce component permet de créer et d'afficher une carrousel, avec des images, des flèches directionnelles (suivant  ou précedent) et un compteur**/
function Carrousel({ pictures }) {
    const [imgIndex, setPicIndex] = useState(0)

    const nextImg = () => {
        setPicIndex((currentImgIndex) => {
            if (currentImgIndex < pictures.length - 1) {
                return currentImgIndex + 1
            } else {
                return 0
            }
        })
    }

    const prevImg = () => {
        setPicIndex((currentImgIndex) => {
            if (currentImgIndex > 0) {
                return currentImgIndex - 1
            } else {
                return pictures.length - 1
            }
        })
    }

    function formatCounter(index, total) {
        return `${index + 1} / ${total}`
    }

    return (
        <div className="carrousel-container">
            <img src={pictures[imgIndex]} alt={"photo_" + imgIndex} className="carrousel-photo" />
            <div className="carrousel-overlay"></div>
            {pictures.length > 1 && (
                <div className="controls">
                    <div className="carrousel-nav">
                        <img src={leftArrow} alt="leftArrow" onClick={prevImg} />
                        <img src={rightArrow} alt="rightArrow" onClick={nextImg} />
                    </div>
                    <div className="carrousel-img-counter">{formatCounter(imgIndex, pictures.length)}</div>
                </div>
            )}
        </div>
    )
}

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carrousel
