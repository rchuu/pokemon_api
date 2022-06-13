import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios'

const PokemonComponent = (props) => {
    const [listOfPokemons, setListOfPokemons] = useState([]); //initialize listOfPokemon to 0
    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setListOfPokemons(response.data.results)
                console.log(response.data.results)
            })
            .catch(err => console.log(err)) //if error, log error
    }, [])

    return (
        <div>
            {listOfPokemons.map((item, index) => (
                <li key={index}> {item.name}</li>
            ))}
        </div>
    )
}

export default PokemonComponent;