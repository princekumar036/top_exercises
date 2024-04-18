

function Card(props) {
    return (
        <div className="card" onClick={handleClick}>
            <img src={props.imageUrl} />
            <p>{props.fullName}</p>
        </div>
    )
}

export default Card