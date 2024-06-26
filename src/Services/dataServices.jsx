import lodge from "../data/logements.json"

export function getLodgesById(id) {
    return lodge.find((house) => house.id === id)
}
