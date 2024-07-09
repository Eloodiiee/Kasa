import React from "react"
import Card from "./Card"

/** Ce component permet d'afficher un nombre de cartes basé sur ma base de données **/

const CardsArray = () => {
    const Cards = Array.from({ length: 1 }, (_, index) => <Card key={index} content={`Card ${index + 1}`} />)

    return <div className="CardContainer">{Cards}</div>
}

export default CardsArray
