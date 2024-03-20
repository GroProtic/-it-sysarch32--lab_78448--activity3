import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
    const [pokemons, setPokemons] = useState([]);
    const [lang, setLang] = useState('English');

    useEffect(() => {
        fetch('https://us-central1-it-sysarch32.cloudfunctions.net/pokemon')
            .then(res => res.json())
            .then(data => {
                const updatedPokemons = data.map(pokemon => {
                    return {
                        ...pokemon,
                        pokemonName: pokemon.name[lang.toLowerCase()],
                        pokemonStats: pokemon.base
                    };
                });
                setPokemons(updatedPokemons);
            })
            
    }, [lang]);

    const handleLanguageChange = (selectedLang) => {
        setLang(selectedLang);
    };

    return (
        <main>
            <div className="languagepick">
                {['English', 'Japanese', 'Chinese', 'French'].map((language, index) => (
                    <button key={index} onClick={() => handleLanguageChange(language)}>{language}</button>
                ))}
            </div>

            <ul className="pokedexdata">
                {pokemons.map(pokemon => (
                    <Pokemon key={pokemon.id} {...pokemon} />
                ))}
            </ul>
        </main>
    );
}

export default Pokedex;