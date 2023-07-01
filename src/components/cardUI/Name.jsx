import { useEffect, useState } from 'react';
import './Name.css'

const Name = (props) => {

    const [name, setName] = useState("")

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(json => setName(json.name))
    }, [])

    return (
        <>
            <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        </>
    );
}

export default Name;