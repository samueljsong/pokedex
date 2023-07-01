import './Pokedex.css';
import { useEffect, useState } from "react";
import NameCard from '../components/NameCard';
import PokemonCard from '../components/PokemonCard';
import RegionNav from '../components/RegionNav';

const Pokemon = (props) => {

    const [search, setSearch] = useState("");           //State for search bar.
    const [pokeList, setPokeList] = useState([]);       //State for the list of pokemon.
    const [toggle, setToggle] = useState(false);        //State for click on name card.
    const [url, setUrl] = useState("");                 //State for storing pokemon fetch url.
    
    /* States for Pokemon Card Component */
    const [selectedPokemonID, setSelectedPokemonID] = useState("");
    const [selectedPokemonType, setSelectedPokemonType] = useState("")


    const POKE_API = "https://pokeapi.co/api/v2/pokemon/?limit=151"     //API url.

    /**
     * Initial API fetch from POKE_API.
     */
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
        setToggle(!toggle);                             //Turns on the flag to render pokemon card
    }

    /**
     * Callback function to lift up the state and set the url to state.
     * @param {A String} url 
     */
    const onOpenPokemonHandler = (url, id, type) => {
        setUrl(url);
        setSelectedPokemonID(id);
        setSelectedPokemonType(type);
        setSearch("");                                   //Resets the search state to nothing.
    }

    

    return (
        <div className='pokemon-container'>
            {
                toggle ? "" : <RegionNav/>
            }
            
            {
                toggle? "" : 
                <div className='search-container'>
                    <input type="text" onChange={onInputHandler} className='searchbar' placeholder={`Search Pokemon`}/>
                    {/* <img src={searchImage} className='search-image' alt="" /> */}
                </div>
                
            }
                
            {
                toggle? <PokemonCard 
                            closePokemonInfo = {onToggleHandler}
                            url = {url}
                            id = {selectedPokemonID}
                            type = {selectedPokemonType}
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