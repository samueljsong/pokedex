import './Pokedex.css';
import { useEffect, useState } from "react";
import NameCard from '../components/NameCard';
import PokemonCard from '../components/PokemonCard';

const Pokemon = (props) => {

    const [search, setSearch] = useState("");
    const POKE_API = "https://pokeapi.co/api/v2/pokemon/?limit=151"
    const [pokeList, setPokeList] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [url, setUrl] = useState("");

    const fetchPokeList = () => {
        fetch(POKE_API)
        .then(response => response.json())
        .then(json => setPokeList(json.results))
    }

   

    /* Fetch API for the list of pokemon returns pokemon name and url */
    useEffect(() => {
        fetchPokeList();
    }, [])

    const onInputHandler = (e) => {
        setSearch(e.target.value);
    }

    const onToggleHandler = () => {
        setToggle(!toggle);
    }

    // lifting up state
    const onOpenPokemonHandler = (url) => {
        setUrl(url)
    }

    return (
        <div className='pokemon-container'>
            {
                toggle ? "" : <h1 className='title'>Pocket Dex</h1>
            }
            
            {
                toggle? "" : <input type="text" onChange={onInputHandler} className='searchbar'/>
            }
                
            {
                toggle? <PokemonCard 
                            closePokemonInfo = {onToggleHandler}
                            url = {url}
                        /> 

                : <div className='pokemon-name-container'>
                    {
                        pokeList.filter(pokemon => {
                            return search.toLowerCase() === '' 
                            ? pokemon 
                            : pokemon.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map(pokemon => {
                            return (
                                <NameCard 
                                    name={pokemon.name} 
                                    key={crypto.randomUUID()} 
                                    url={pokemon.url} id={pokemon.url.slice(34, pokemon.url.length-1)}
                                    openPokemonInfo = {onToggleHandler}
                                    liftState = {onOpenPokemonHandler}
                                />
                            );
                        })
                    }
                </div>
            }

        </div>
    );
}

export default Pokemon;