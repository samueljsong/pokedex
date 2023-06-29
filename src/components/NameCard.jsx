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


    return(
        <button className='namecard-container' onClick={onClickHandler}>
            {props.name}
            {
                <p>
                    {clicked ? JSON.stringify(pokeInfo.abilities) : null}
                </p>
            }
        </button>
    );
}

export default NameCard