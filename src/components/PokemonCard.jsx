import { useEffect, useState } from 'react';
import './PokemonCard.css'
import Name from './cardUI/Name';
import Type from './cardUI/Type';
import PokemonCardNav from './PokemonCardNav';
import About from './pages/About';
import BaseStat from './pages/BaseStat';
import Evolution from './pages/Evolution';
import Moves from './pages/Moves';
import back from '/back.png'


const PokemonCard = (props) => {

    const [pokemonInfo, setPokemonInfo] = useState({});
    const [speciesInfo, setSpeciesInfo] = useState({});

    /* State for navigation */
    const [about, setAbout] = useState(true);
    const [base, setBase] = useState(false);
    const [evolution, setevolution] = useState(false);
    const [moves, setMoves] = useState(false);


    let component
    switch (window.location.pathname){
        case "/":
            break;
        case "/about":
            component = <About info={pokemonInfo} speciesInfo={speciesInfo} id={props.id}/>
            break;
        case "/basestat":
            component = <BaseStat/>
            break;
        case "/evolution":
            component = <Evolution/>
            break;
        case "/moves":
            component = <Moves/>
            break;
    }

    let imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`
    let speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${props.id}/`

    const onClickHandler = () => {
        props.closePokemonInfo();
    }

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setPokemonInfo(json))
    }, [])

    useEffect(() => {
        if(Object.keys(pokemonInfo) !== 0){
            fetch(speciesURL)
            .then(response => response.json())
            .then(json => setSpeciesInfo(json))
        }else{
            console.log("waiting")
        }
    }, [pokemonInfo])    



    return (
        <>
            <div className={`pokemoncard-generalcontainer`}>
                <div className={`pokemoncard-container ${props.type}-pc`}>
                    <div className='pokemoncard-title'>
                        <img className="pokemoncard-back" src={back} onClick={onClickHandler} alt="back" />
                        <Name url={props.url}/>
                        <div className='pokemoncard-types'>
                            <Type url ={props.url}></Type>    
                        </div>
                    </div>
                    <img className='pokemoncard-img' src={imageURL} alt="" />
                    <div className='pokemoncard-details'>
                        <PokemonCardNav></PokemonCardNav>
                        {
                            about ? <About info={pokemonInfo} speciesInfo={speciesInfo} id={props.id}/> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;