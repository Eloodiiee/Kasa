import React, { Fragment } from "react"
import Banner from "../components/banner/Banner"
import CardsArray from "../components/Cards/Cards"

const Accueil = () => {
    return (
        <Fragment>
            <Banner className="bannerOne" title="Chez vous, partout et ailleurs" imgUrl="src/assets/images/banner_1.png" />
            <CardsArray />
        </Fragment>
    )
}

export default Accueil
