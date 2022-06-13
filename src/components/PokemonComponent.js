import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios'

const PokemonComponent = (props) => {
    let [state, setState] = useState([]);
    let [count, setCount] = useState(0);

    useEffect(() => { // useEffect is a hook that runs after the component is rendered
        if (count > 0) {
            axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
                .then(response => {
                    state = response.data.results; // set the state to the data from the response
                    setState([...state])
                }
                );
            console.log(state);
        }
    }, [count])

    const onClickHandler = () => {
        console.log(state);
        if (count === 0) {
            setCount(1);
        }
        else {
            setCount(0);
            setState([]);
        }
        console.log(count);
    };

    return (
        <div>
            <button onClick={onClickHandler}>{count === 0 ? 'I got yo asses' : 'Go away'} </button>
            {state.map((item, index) => {
                return (<div key={index}>{item.name}</div>)
            })}
        </div>
    )
}

export default PokemonComponent;