function Card({ name, birthYear, nationality, biography, image, awards, knownFor }) {
    return (

        <article className="card h-100">
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <time>{birthYear}</time>
            <span>{nationality}</span>
            <p>{biography}</p>
            <span>Known For</span>
            <ul className="list-unstyled">{knownFor.map((know, id) => {
                return <li key={id}>{know}</li>
            })}</ul>
            <span>Awards</span>
            <ul className="list-unstyled">{awards.map((award, id) => {
                return <li key={id}>{award}</li>
            })}</ul>
        </article>
    )
}
export default Card