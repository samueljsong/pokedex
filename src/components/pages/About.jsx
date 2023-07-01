import './About.css';

const About =(props) => {

    let height = convertHeight(props.info.height);
    let weight = convertWeight(props.info.weight);
    let abilities =[];

    for (let idx in props.info.abilities){
        abilities.push(props.info.abilities[idx].ability.name)
    }

    let abilitiesString = getAbilities(abilities);


    return (
        <div className='about-container'>

                <div className='about-subsection'>
                    <p>Height:</p>
                    <p>Weight:</p>
                    <p>Abilities:</p>
                </div>

                <div className='about-details'>
                    <p>{height}</p>
                    <p>{weight}</p>
                    <p>{abilitiesString}</p>
                </div>
            
        </div>
    )
}

export default About;

/**
 * Creates and returns a formatted string from the given weight.
 * @param {An Integer} w 
 * @returns String
 */
function convertWeight(w) {
    let kg = w / 10;
    let lbs = parseFloat(kg * 2.2).toFixed(1);
    return `${lbs}lbs (${kg}kg)`
}

/**
 * Creates and returns a formatted string from the given height.
 * @param {An Integer} h 
 * @returns String
 */
function convertHeight(h) {
    let temp = h* 10;

    let footAndInches = temp / 30.48;
    let ft = Math.floor(footAndInches);
    let inches = footAndInches.toString().indexOf('.');
    let meters = parseFloat(temp / 100).toFixed(2);

    return `${ft}'${inches}" (${meters}m)`;
}

/**
 * Creates and returns a formatted string from given list of words.
 * @param {List} abilities 
 * @returns String
 */
function getAbilities(abilities){
    let results = "";
    for (let idx in abilities){
        results += (abilities[idx].charAt(0).toUpperCase() + abilities[idx].slice(1) + " ")
    }
    return results
}