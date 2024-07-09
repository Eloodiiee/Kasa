import lodge from "../data/logements.json"

/** Fonction qui permet de parcourir la base de donnée**/
export function getLodgesById(id) {
    return lodge.find((house) => house.id === id)
}
