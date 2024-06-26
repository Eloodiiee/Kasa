import React from "react"
import Card from "./Card"

const CardsArray = () => {
    const Cards = Array.from({ length: 1 }, (_, index) => <Card key={index} content={`Card ${index + 1}`} />)

    return <div className="CardContainer">{Cards}</div>
}

export default CardsArray
