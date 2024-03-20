import { useState, useEffect } from 'react'

 function Pokemon({id,pokemonName,type,image,pokemonStats}){


    return <li>
        <img src={image} alt={pokemonName} />

        <h3>
            [{id}] {pokemonName}
        </h3>

        <ul className="pokemonType">
            {type.map((el,i)=><li key={i}>{el}</li>)}
        </ul>

        <ul className='columnType'>
            <li>HP: {pokemonStats['HP']}</li>
            <li>Speed: {pokemonStats['Speed']}</li>
            <li>Attk: {pokemonStats['Attack']}</li>
            <li>Sp. Attk: {pokemonStats['Sp. Attack']}</li>
            <li>Def{pokemonStats['Def']}</li>
            <li>Sp. Def: {pokemonStats['Sp. Def']}</li>
        </ul>


    </li>
}
export default Pokemon