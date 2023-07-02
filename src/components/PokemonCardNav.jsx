import './PokemonCardNav.css'


const PokemonCardNav = (props) => {
    return(
        <>
            <nav className="nav">
                <div className='nav-element' onClick={props.aboutClick}>
                    <h4 className={`${props.statusAbout}`}>About</h4>
                </div>
                <div className='nav-element' onClick={props.baseClick}>
                    <h4 className={`${props.statusBase}`}>Base Stats</h4>
                </div>
                <div className='nav-element' onClick={props.evolutionClick}>
                    <h4 className={`${props.statusEvolution}`}>Evolution</h4>
                </div>
                <div className='nav-element' onClick={props.movesClick}>
                    <h4 className={`${props.statusMoves}`}>Moves</h4>
                </div>
            </nav>
        </>
    );
}

export default PokemonCardNav;