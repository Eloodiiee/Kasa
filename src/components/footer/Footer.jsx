import React from "react"
import footerlogo from "../../assets/logo/footer_logo.png"

const Footer = () => {
    return (
        <footer>
            <img src={footerlogo} alt="footer logo" />
            <span className="footerText">© 2024 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer
