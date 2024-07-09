import React from "react"
import Collapse from "../components/Collapse/Collapse"
import Banner from "../components/banner/Banner"
import { Fragment } from "react"

/** La page a propos affiche tout les components requis sur cette page (banner, collapses) **/
const About = () => {
    return (
        <Fragment>
            <Banner className="bannerTwo" imgUrl="src/assets/images/banner_2.png" />
            <div className="about-content">
                <Collapse title="Fiabilité">
                    <p>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos
                        équipes.
                    </p>
                </Collapse>
                <Collapse title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse title="Service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Collapse>
                <Collapse title="Sécurité">
                    <p>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant
                        une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la
                        sécurité domestique pour nos hôtes.
                    </p>
                </Collapse>
            </div>
        </Fragment>
    )
}

export default About
