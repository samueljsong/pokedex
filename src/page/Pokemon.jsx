import './Pokemon.css';
import { useEffect, useState } from "react";
import NameCard from '../components/NameCard';

const Pokemon = () => {

    const [search, setSearch] = useState("");
    const POKE_API = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    const [pokeList, setPokeList] = useState([]);

    /* Fetch API for the list of pokemon returns pokemon name and url */
    useEffect(() => {
        fetch(POKE_API)
        .then(response => response.json())
        .then(json => setPokeList(json.results));

        
    }, [])


    const onInputHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <input type="text" onChange={onInputHandler}/>
            <h1>{search}</h1>
            <div className='pokemon-name-container'>
                {
                    pokeList.filter(pokemon => {
                        return search.toLowerCase() === '' 
                        ? pokemon 
                        : pokemon.name.toLowerCase().includes(search.toLowerCase());
                    })
                    .map(pokemon => {
                        return (
                            <NameCard name={pokemon.name} key={crypto.randomUUID()} url={pokemon.url}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Pokemon;