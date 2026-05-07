import Card from "./Card"

function CardList({ data }) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {data.map(datum => (
                <div className="col" key={datum.id}>
                    <Card
                        name={datum.name}
                        birthYear={datum.birthYear}
                        nationality={datum.nationality}
                        biography={datum.biography}
                        image={datum.image}
                        awards={datum.awards}
                        knownFor={datum.knownFor}
                    />
                </div>
            ))}
        </div>
    )
}
export default CardList