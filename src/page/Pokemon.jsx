import './Pokemon.css';
import { useEffect, useState } from "react";

const Pokemon = () => {

    const [search, setSearch] = useState("");
    const POKE_API = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    const [pokeList, setPokeList] = useState([]);



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
                            <button className='pokemon-button'>
                                {pokemon.name.toUpperCase()}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Pokemon;