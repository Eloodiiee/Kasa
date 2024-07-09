import React from "react"
import { NavLink } from "react-router-dom"
import logokasa from "../../assets/logo/Logokasa.png"

/** Ce component permet d'afficher le header avec le nav**/
const Header = () => {
    return (
        <header>
            <img src={logokasa} alt="logo kasa" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">À propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
