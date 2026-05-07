function Card({ name, birthYear, nationality, biography, image, awards, knownFor }) {
    const KnownJsx = knownFor.map(know => {
        return know;
    })
    const awardsJsx = awards.map(award => {
        return award;
    });
    return (

        <article className="card card-actor h-100 bg-dark-blue text-white p-3">
            <h2 className="text-center">{name}</h2>
            <div className="m-auto">
                <img src={image} alt={name} />
            </div>
            <div className="d-flex justify-content-center">
                <time className="me-2">{birthYear}</time>
                <span>{nationality}</span>
            </div>
            <p className="text-center p-2">{biography}</p>
            <div className="text-center text-danger">
                <span className="fw-bold">Known For:</span>
                <p>{KnownJsx.join(', ')}</p>
            </div>
            <div className="text-center text-warning">
                <span className="fw-bold">Awards:</span>
                <p>{awardsJsx.join(', ')}</p>
            </div>
        </article>
    )
}
export default Card