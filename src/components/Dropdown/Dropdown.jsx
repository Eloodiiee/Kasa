import PropTypes from "prop-types"
import { useState } from "react"
import chevron from "../../assets/images/chevron-up.svg"

function Dropdown({ content, title }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="dropdown-element">
            <div className="dropdown-nav" onClick={toggleDropdown}>
                <h3 className="dropdown-heading">{title}</h3>
                <img src={chevron} alt="Chevron" className={`collapse-icon ${isOpen ? "open" : ""}`} />
            </div>
            <div className={`dropdown-details ${isOpen ? "open" : ""}`}>
                {title === "Equipements" ? (
                    <ul>
                        {content.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
}

export default Dropdown
