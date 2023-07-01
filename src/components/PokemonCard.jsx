import { useEffect, useState } from 'react';
import './PokemonCard.css'
import Name from './cardUI/Name';
import Type from './cardUI/Type';


const PokemonCard = (props) => {

    const [pokemonInfo, setPokemonInfo] = useState({});

    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`

    const onClickHandler = () => {
        props.closePokemonInfo();
    }

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setPokemonInfo(json))
    }, [])

    return (
        <>
            <div className='pokemoncard-generalcontainer'>
                <button className="pokemoncard-back" onClick={onClickHandler}>go back</button>
                
                <div className='pokemoncard-container'>
                    <div className='pokemoncard-title'>
                        <Name url={props.url}/>
                        <div className='pokemoncard-type'>
                            <Type url ={props.url}></Type>
                        </div>
                    </div>
                    <img className='pokemoncard-img' src={imageURL} alt="" />
                    <div className='pokemoncard-details'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;