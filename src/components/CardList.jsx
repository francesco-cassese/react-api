import Card from "./Card"

function CardList({ id, name, birth_year: birthYear, biography, image, awards }) {
    const cardListJsx = data.map(datum => {
        return <ul><Card /></ul>
    })
    return (
        { cardListJsx }
    )
}
export default CardList