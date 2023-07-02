import { useEffect, useState } from 'react';
import './About.css';


const About =(props) => {

    let height = convertHeight(props.info.height);
    let weight = convertWeight(props.info.weight);
    let abilities =[];
    let breeding = [];                                  //property for AboutBree

    for (let idx in props.info.abilities){
        abilities.push(props.info.abilities[idx].ability.name)
    }

    for (let idx in props.speciesInfo.egg_groups){
        breeding.push(props.speciesInfo.egg_groups[idx].name)
    }

    let abilitiesString = getAbilities(abilities);
    let breedingString = getBreedingString(breeding);


    return (
        <div className='about-container'>

                <div className='about-subsection'>
                    <p>ID:</p>
                    <p>Height:</p>
                    <p>Weight:</p>
                    <p>Abilities:</p>
                    <p>Capture Rate:</p>
                </div>

                <div className='about-details'>
                    <p>{props.id}</p>
                    <p>{height}</p>
                    <p>{weight}</p>
                    <p>{abilitiesString}</p>
                    <p>{props.speciesInfo.capture_rate}</p>
                </div>

                <div className="about-breeding-title">
                    <h3>Breeding</h3>
                </div>

                <div className="about-breeding-details">
                    {breedingString}
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


function getBreedingString(breeding){
    let results = "";
    for(let idx in breeding){
        results += (breeding[idx].charAt(0).toUpperCase() + breeding[idx].slice(1) + " ")
    }
    return results
}