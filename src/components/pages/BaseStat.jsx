import './BaseStat.css'

const BaseStat = (props) => {

    let hp = getHP(props.statInfo)
    let atk = getAttack(props.statInfo)
    let def = getDefense(props.statInfo)
    let spAtk = getSpAttk(props.statInfo)
    let spDef = getSpDef(props.statInfo)
    let speed = getSpeed(props.statInfo)
    let total = hp + atk + def + spAtk + spDef + speed;

    return(
        <div className='bs-container'>

            <div className='bs-subsection'>
                <p>HP</p>
                <p>Attack</p>
                <p>Defense</p>
                <p>Sp. Atk</p>
                <p>Sp. Def</p>
                <p>Speed</p>
                <p>Total</p>
            </div>

            <div className='bs-details'>
                <div className='bs-statline'>
                    <p>{`${hp}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${atk}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${def}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${spAtk}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${spDef}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${speed}`}</p>
                </div>
                <div className='bs-statline'>
                    <p>{`${total}`}</p>
                </div>
            </div>

            <div className='bs-statline'>
                <span className={`line ${getColor(hp)}`} style={{width: hp * 1.2}}></span>
                <span className={`line ${getColor(atk)}`} style={{width: atk * 1.2}}></span>
                <span className={`line ${getColor(def)}`} style={{width: def * 1.2}}></span>
                <span className={`line ${getColor(spAtk)}`} style={{width: spAtk * 1.2}}></span>
                <span className={`line ${getColor(spDef)}`} style={{width: spDef * 1.2}}></span>
                <span className={`line ${getColor(speed)}`} style={{width: speed * 1.2}}></span>
                <span className='line green' style={{width: total/4.5}}></span>
            </div>

        </div>
    )
}

export default BaseStat;

const getHP = (statInfo) => {
    return statInfo[0].base_stat;
}

const getAttack = (statInfo) => {
    return statInfo[1].base_stat;
}

const getDefense = (statInfo) => {
    return statInfo[2].base_stat;
}

const getSpAttk = (statInfo) => {
    return statInfo[3].base_stat;
}

const getSpDef = (statInfo) => {
    return statInfo[4].base_stat;
}

const getSpeed = (statInfo) => {
    return statInfo[5].base_stat;
}

const getColor = (num) => {
    return num > 60 ? "green" : "red"
}