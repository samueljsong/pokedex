import './PokemonCardNav.css'
import { Link } from 'react-router-dom';


const PokemonCardNav = () => {
    return(
        <>
            <nav className="nav">
                <div className='nav-element'><a href="/about"><h4 className='active'>About</h4></a></div>
                <div className='nav-element'><a href="/basestat"><h4>Base Stats</h4></a></div>
                <div className='nav-element'><a href="/evolution"><h4>Evolution</h4></a></div>
                <div className='nav-element'><a href="/moves"><h4>Moves</h4></a></div>
            </nav>
        </>
    );
}

export default PokemonCardNav;