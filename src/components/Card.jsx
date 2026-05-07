function Card({ name, birthYear, nationality, biography, image, awards }) {
    return (
        <li>
            <article className="card">
                <h2>{name}</h2>
                <time>{birthYear}</time>
                <span>{nationality}</span>
                <p>{biography}</p>
                <img src={image} alt={name} />
                <ul>{awards}</ul>
            </article>
        </li>
    )
}
export default Card