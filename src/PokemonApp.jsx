import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const {pokemons = [], isLoading, page} = useSelector(state => state.pokemons);
  //console.log(pokemons);
  useEffect(()=>{
    dispatch(getPokemons());
  },[])

  return (
    <>
    <h1>PokemonApp</h1>
    <hr/>
    <span>Loading: {isLoading ? 'True': 'False'}</span>

    <ul>
      {
      pokemons.map(pokemon => (<li key={pokemon.name}>{pokemon.name}</li>))
      }
    </ul>

    <button
      disabled={isLoading}
      onClick={()=> dispatch(getPokemons(page))}
    >
      Next
    </button>

    </>
  )
}
