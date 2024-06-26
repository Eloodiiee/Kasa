import React, { Fragment } from "react"
import Banner from "../components/banner/Banner"
import CardsArray from "../components/Cards/Cards"

const Accueil = () => {
    return (
        <Fragment>
            <Banner className="bannerOne" title="Chez vous, partout et ailleurs" />
            <CardsArray />
        </Fragment>
    )
}

export default Accueil
