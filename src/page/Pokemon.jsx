import './Pokemon.css';
import { useEffect, useState } from "react";
import NameCard from '../components/NameCard';

const Pokemon = () => {

    const [search, setSearch] = useState("");
    const POKE_API = "https://pokeapi.co/api/v2/pokemon/?limit=10"
    const [pokeList, setPokeList] = useState([]);
    const [type, setType] = useState([]);


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

    return (
        <div className='pokemon-container'>
            <h1 className='title'>Pocket Dex</h1>
            <input type="text" onChange={onInputHandler} className='searchbar'/>
            <div className='pokemon-name-container'>
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
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Pokemon;