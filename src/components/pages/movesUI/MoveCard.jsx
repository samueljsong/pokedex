import { useEffect, useState } from 'react';
import './MoveCard.css'

const MoveCard = (props) => {

    const [moveObj, setMoveObj] = useState({});             //overarching object
    const [moveType, setMoveType] = useState({});           //an object
    const [moveTypeString, setMoveTypeString] = useState("");
    const [movePower, setMovePower] = useState("");
    const [movePP, setMovePP] = useState("");
    const [moveAcc, setMoveAcc] = useState("");
    const [moveDmgClass, setMoveDmgClass] = useState("");

    // let typeImage = `/${moveTypeString}.png`;
    // let dmgClassImage = `/${moveDmgClass}`; 


    useEffect(() => {
        fetch(props.moveUrl)
        .then(response => response.json())
        .then(json => setMoveObj(json))
    }, [])
    



    return (
        <div className='mc-container'>
            <div className='mc-title'>
                <h5 className='mc-name'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h5>
                {/* <img className="type-img mc-img" src="" alt="" /> */}
            </div>
        </div>
    )
}

export default MoveCard;
