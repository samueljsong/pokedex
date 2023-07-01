import { useEffect, useState, useRef } from 'react';
import './NameCard.css';

const NameCard = (props) => {

    /**
     * Information of the individual pokemon.
     */
   
    const [type, setType] = useState([]);           // Need to fix card background color rendering
    const [cardType, setCardType] = useState(""); 

    const getType = async () => {
        await fetch(props.url)
        .then(response => response.json())
        .then(json => setType(json.types))
        // setCardType(type[0].type.name)
    }

    useEffect(() => {
        getType()
    }, [])

    /**
     * sets clicked
     */
    const onClickHandler = () => {
        props.liftState(props.url)
        props.openPokemonInfo();
    }


    const cardStyle = `namecard-container ${cardType}`

    /**
     * This is the url for the pokemons png image.
     */
    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`


    return(
        <div className={cardStyle} onClick={onClickHandler} >
            <div className='namecard-information'>
                <h4 className='namecard-name'>
                    {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                </h4>
                <div className='type-container'>
                    {
                        type.map(slot => {
                            return <img className="type-img" key={crypto.randomUUID()} src={`/${slot.type.name}.png`}></img>
                        })
                    }
                </div>
            </div>

            <img className="pokemon-image" src={imageURL} alt="" />
        </div>
    );
}

export default NameCard


//<h4 key={crypto.randomUUID()}>{slot.type.name}</h4>