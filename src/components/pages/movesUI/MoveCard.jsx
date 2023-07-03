import { useEffect, useState } from 'react';
import './MoveCard.css'

const MoveCard = (props) => {

    const [moveObj, setMoveObj] = useState({});                 //overarching object              //an object
    const [moveTypeString, setMoveTypeString] = useState("");
    const [movePower, setMovePower] = useState("");
    const [movePP, setMovePP] = useState("");
    const [moveAcc, setMoveAcc] = useState("");
    const [moveDmgClass, setMoveDmgClass] = useState("");

    useEffect(() => {
        const getData = async () => {
            await fetch(props.moveUrl)
                .then(response => response.json())
                .then(json => {
                    setMoveObj(json)
                    setMoveTypeString(json.type.name)
                    setMovePower(json.power)
                    setMovePP(json.pp)
                    setMoveAcc(json.accuracy)
                    setMoveDmgClass(json.damage_class.name)
                })
        }
        getData();
    }, [])
    


    return (
        <div className={`mc-container ${moveTypeString}`}>
            <div className='mc-title'>
                <h5 className='mc-name'>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h5>
                <img className="type-img mc-img " src={`/${moveTypeString}.png`} alt=""/>
            </div>
            <p className='mc-dmgclass'>Dmg Class: {moveDmgClass.charAt(0).toUpperCase() + moveDmgClass.slice(1)}</p>
            <div className='mc-details'>
                <div className='mc-power mc-width'>
                    <h5 className='details'>PWR</h5>
                    <h5 className='details'>{movePower === null ? '---' : movePower}</h5>
                </div>
                <div className='mc-accuracy mc-width'>
                    <h5 className='details'>ACC</h5>
                    <h5 className="details">{moveAcc === null ? '---' : moveAcc}</h5>
                </div>
                <div className='mc-pp mc-width'>
                    <h5 className='details'>PPS</h5>
                    <h5 className="details">{movePP}</h5>
                </div>
            </div>
        </div>
    )
}

export default MoveCard;
