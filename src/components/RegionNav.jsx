import './RegionNav.css'
import pokeball from '../../public/pokeball2.png'

const RegionNav = () => {
    return(
        <nav className='regionnav-container'>
            <img className='logo' src={pokeball} alt="pokeball" />

        </nav>
    );
}

export default RegionNav;