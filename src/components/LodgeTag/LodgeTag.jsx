import PropTypes from "prop-types"

/** Ce component permet d'afficher les tags d'un logement**/
function LodgeTag({ tag }) {
    return <div className="tag">{tag}</div>
}

LodgeTag.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default LodgeTag
