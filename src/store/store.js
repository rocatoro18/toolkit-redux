import { configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './slices/counter';
import { pokemonSlice } from './slices/pokemon';
import { todosApi } from './apis';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    // LLAVES CUADRADAS = PROPIEDAD COMPUTADA
    [todosApi.reducerPath]: todosApi.reducer,
  },
  // UN MIDDLEWARE ES UNA FUNCION QUE SE EJECUTA ANTES QUE OTRA
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware)
})