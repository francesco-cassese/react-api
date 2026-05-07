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
            knownFor={datum.knownFor}
        />
    })
    return (
        <ul className="list-unstyled">{cardListJsx}</ul>
    )
}
export default CardList