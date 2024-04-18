import Card from "./Card"

export default function Cards(props) {
    return(
        <div className='card-container' >
            {props.cards.map(characater => (
                <Card 
                    key={characater.id} 
                    imageUrl={characater.imageUrl} 
                    fullName={characater.fullName}
                    handleClick={props.handleClick}
                />
            ))}
        </div>
    )
}