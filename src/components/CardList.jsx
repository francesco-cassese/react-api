import Card from "./Card"

function CardList({ data }) {
    const cardListJsx = data.map(datum => {
        return <Card
            key={datum.id}
            name={datum.name}
            birthYear={datum.birthYear}
            nationality={datum.nationality}
            biography={datum.biography}
            image={datum.image}
            awards={datum.awards}
        />
    })
    return (
        <ul>{cardListJsx}</ul>
    )
}
export default CardList