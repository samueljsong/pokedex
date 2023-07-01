import { useEffect, useState, useRef } from 'react';
import './NameCard.css';

const NameCard = (props) => {

    /**
     * Information of the individual pokemon.
     */
   
    const [types, setType] = useState([]);           // Need to fix card background color rendering
    const [cardType, setCardType] = useState(""); 
    const [mainType, setMainType] = useState("");


    useEffect(() => {
        const getType = async () => {
            await fetch(props.url)
            .then(response => response.json())
            .then(json => setType(json.types))
        }
        getType();
    }, [])

    useEffect(() => {
        if (types.length === 0){
            return;
        }else{
            setMainType(types[0].type.name);
        }
    }, [types])

    /**
     * sets clicked
     */
    const onClickHandler = () => {
        props.liftState(props.url)
        props.openPokemonInfo();
    }


    const cardStyle = `namecard-container ${mainType}`
    
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
                        types.map(slot => {
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
