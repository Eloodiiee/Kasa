import { Fragment } from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getLodgesById } from "../Services/dataServices"
import LodgeTag from "../components/LodgeTag/LodgeTag"
import Rating from "../components/Rating/Rating"
import Dropdown from "../components/DropDown/Dropdown"
import Carrousel from "../components/Carrousel/Carrousel"

/** La page Logements affiche tout les components requis sur cette page (les tags, étoiles, dropdown, et le carrousel) **/
/** La const Lodging permet d'afficher les informations du logement sélectionné en comparant l'Id dans la data des logements et de l'url**/
/** Si l'Id ne correspond pas l'utilisateur est renvoyé vers la pas erreur**/
const Lodging = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const lodge = getLodgesById(id)
        if (lodge) {
            setData(lodge)
        } else {
            navigate("/PageErreur")
        }
    }, [id, navigate])

    return (
        <Fragment>
            {data && (
                <div className="lodge-container">
                    <Carrousel pictures={data.pictures} />
                    <div className="lodge">
                        <h2 className="title">{data.title}</h2>
                        <h3 className="location">{data.location}</h3>
                    </div>
                    <div className="host-container">
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt="" />
                    </div>
                    <div className="tags">
                        {data.tags.map((tag) => (
                            <LodgeTag tag={tag} key={tag} />
                        ))}
                    </div>
                    <div className="rating">
                        <Rating rating={Number(data.rating)} hostName={data.host.name} />
                    </div>
                    <div className="Dropdowns-container">
                        <Dropdown title="Description" content={data.description} />
                        <Dropdown title="Equipements" content={data.equipments} />
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Lodging
