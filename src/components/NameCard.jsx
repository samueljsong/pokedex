import { useState } from 'react';
import './NameCard.css';

const NameCard = (props) => {

    /**
     * Information of the individual pokemon.
     */
    const [pokeInfo, setPokeInfo] = useState({});
    const [clicked, setClicked] = useState(false);


    /**
     * Fetches information of the individual pokemon.
     */
    const onClickHandler = () => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setPokeInfo(json))
        .then(console.log(pokeInfo))
        setClicked(!clicked)
    }

    /**
     * This is the url for the pokemons png image.
     */
    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`


    return(
        <div className='namecard-container' onClick={onClickHandler} style={{background: "grey"}}>
            {props.name}
            {
                <p>
                    {clicked ? JSON.stringify(pokeInfo.abilities) : null}
                </p>
            }
            <img className="pokemon-image" src={imageURL} alt="" />
        </div>
    );
}

export default NameCard