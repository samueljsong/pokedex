import { useEffect, useState } from 'react';
import './PokemonCard.css'
import Name from './cardUI/Name';
import Type from './cardUI/Type';
import PokemonCardNav from './PokemonCardNav';
import About from './pages/About';
import BaseStat from './pages/BaseStat';
import Evolution from './pages/Evolution';
import Moves from './pages/Moves';
import back from '/back.png';
import pokeball from '/pokeball2.png';


const PokemonCard = (props) => {

    const [pokemonInfo, setPokemonInfo] = useState({});
    const [speciesInfo, setSpeciesInfo] = useState({});

    /* State for navigation */
    const [about, setAbout] = useState(true);
    const [base, setBase] = useState(false);
    const [evolution, setEvolution] = useState(false);
    const [moves, setMoves] = useState(false);

    const onClickAboutHandler = () => {
        setAbout(true);
        setBase(false);
        setEvolution(false);
        setMoves(false);
    }

    const onClickBaseHandler = () => {
        setAbout(false);
        setBase(true);
        setEvolution(false);
        setMoves(false);
    }

    const onClickEvolutionHandler = () => {
        setAbout(false);
        setBase(false);
        setEvolution(true);
        setMoves(false);
    }

    const onClickMovesHandler = () => {
        setAbout(false);
        setBase(false);
        setEvolution(false);
        setMoves(true);
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
                    <div className='pokemoncard-image-container'>
                        <img className='pokemoncard-img' src={imageURL} alt="" />
                        <img className='pokemoncard-pokeball-img' src={pokeball} alt="" />
                    </div>
                   
                    <div className='pokemoncard-details'>
                        <PokemonCardNav
                            aboutClick={onClickAboutHandler}
                            baseClick={onClickBaseHandler}
                            movesClick={onClickMovesHandler}
                            statusAbout={about}
                            statusBase={base}
                            statusMoves={moves}
                        />
                        {
                            about ? <About info={pokemonInfo} 
                                        speciesInfo={speciesInfo} 
                                        id={props.id}
                                    /> : null
                        }
                        {
                            base ? <BaseStat
                                        statInfo={pokemonInfo.stats}
                                /> : null
                        }
                    
                        {
                            moves ? <Moves /> : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;