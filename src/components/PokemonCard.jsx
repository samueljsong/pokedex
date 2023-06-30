import './PokemonCard.css'


const PokemonCard = (props) => {


    const onClickHandler = () => {
        props.closePokemonInfo();
    }

    return (
        <div>
            <button onClick={onClickHandler}>go back</button>
            <h1>HI</h1>
            <p>{props.url}</p>
        </div>
    )
}

export default PokemonCard;