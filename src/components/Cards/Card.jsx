import React from "react"
import Lodging from "../../assets/data/logements.json"
import { Fragment } from "react"
import { Link } from "react-router-dom"

const Card = () => {
    return (
        <Fragment>
            {Lodging.map((lodge) => (
                <Link to={"/location/" + lodge.id} className="card" key={lodge.id}>
                    <img src={lodge.cover} alt="" />
                    <div>
                        <h4>{lodge.title}</h4>
                    </div>
                </Link>
            ))}
        </Fragment>
    )
}

export default Card
