import { useEffect, useState } from 'react';
import './Type.css';

const Type = (props) => {

    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => json.types)
        .then(types => setTypes(types))
    })

    return (
        <>
            {
                types.map(slot => {
                    return <img className="type-img" key={crypto.randomUUID()} src={`/${slot.type.name}.png`} alt="" />
                })
            }
        </>
    );
}

export default Type;