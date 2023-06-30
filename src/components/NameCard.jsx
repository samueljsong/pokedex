import { useEffect, useState } from 'react';
import './NameCard.css';

const NameCard = (props) => {

    /**
     * Information of the individual pokemon.
     */
    const [pokeInfo, setPokeInfo] = useState({});
    const [clicked, setClicked] = useState(false);
    const [type, setType] = useState([]);

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setType(json.types))
        
    }, [])

    /**
     * sets clicked
     */
    const onClickHandler = () => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setPokeInfo(json))
        setClicked(!clicked)
    }


    /**
     * This is the url for the pokemons png image.
     */
    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`


    return(
        <div className='namecard-container' onClick={onClickHandler} style={{background: "grey"}}>
            <div className='namecard-information'>
                <h4 className='namecard-name'>
                    {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                </h4>
                {
                    type.map(slot => {
                        return <h4 key={crypto.randomUUID()}>{slot.type.name}</h4>
                    })
                }
            </div>

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