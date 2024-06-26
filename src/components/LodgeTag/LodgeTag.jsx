import PropTypes from "prop-types"

function LodgeTag({ tag }) {
    return <div className="tag">{tag}</div>
}

LodgeTag.propTypes = {
    tag: PropTypes.string.isRequired,
}

export default LodgeTag
