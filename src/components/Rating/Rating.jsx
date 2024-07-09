import PropTypes from "prop-types"
import solidStar from "../../assets/images/star-solid.svg"
import blankStar from "../../assets/images/star-empty.svg"

/** Ce component permet d'afficher la note d'un logement en étoile**/
function Rating({ rating, hostName }) {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <img key={index} src={rating >= index + 1 ? solidStar : blankStar} alt={`${hostName} Rating`} />
            ))}
        </>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
}

export default Rating
