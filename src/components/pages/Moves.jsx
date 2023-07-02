import './Moves.css';
import MoveCard from './movesUI/MoveCard';

const Moves = (props) => {
    return (
        <div className='moves-container'>
            {
                props.movesList.map(move => {
                    return <MoveCard
                           name={move.move.name}
                           moveUrl={move.move.url} 
                           key={crypto.randomUUID()}
                    />
                })
            }
        </div>
    )
}

export default Moves;