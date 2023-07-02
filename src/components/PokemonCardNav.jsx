import './PokemonCardNav.css'
import { Link } from 'react-router-dom';


const PokemonCardNav = (props) => {
    return(
        <>
            <nav className="nav">
                <div className='nav-element'><h4 className='active'>About</h4></div>
                <div className='nav-element'><h4>Base Stats</h4></div>
                <div className='nav-element'><h4>Evolution</h4></div>
                <div className='nav-element'><h4>Moves</h4></div>
            </nav>
        </>
    );
}

export default PokemonCardNav;