import React, { useState } from "react"
import chevronUp from "../../assets/images/chevron-up.svg"

/** Ce component permet d'afficher le titre et la description des collapses ( page A propos) **/
const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={chevronUp} alt="Chevron Up" className={`collapse-icon ${isOpen ? "open" : ""}`} />
            </div>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>{children}</div>
        </div>
    )
}

export default Collapse
