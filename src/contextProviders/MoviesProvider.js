import React, { createContext, useReducer } from 'react';
import { includesCategories, modifyDates } from '../customLogic/customLogic';

const initialState = {
  movies: [],
};



const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SHOW_MOVIES':
      let response = action.payload[0];
      const modifyResults = modifyDates(response)
      response.results = modifyResults
      return {
        movies: response,
      };

    case 'SEARCH_MOVIE':
      console.log(state, 'ftytf')
        state.movies.results = state.movies.results.filter(
            name => name.original_title === action.payload,
        )
        return {
            movies: state
        };
    case 'FILTER_MOVIES_CATEGORIES':
        state.movies.results = includesCategories(state.movies.results, action.payload)
      return {
        movies: state
      };
    case 'SORT_MOVIES_ASC':
        state.movies.results = state.movies.results.sort((a,b) => a.release_date - b.release_date)
      return {
        movies: state
      };
    case 'SORT_MOVIES_DES':
        state.movies.results = state.movies.results.sort((a,b) => b.release_date - a.release_date)
        return {
        movies: state
    };
    case 'SORT_0-10':
        state.movies.results = state.movies.results.sort((a,b) => a.vote_average- b.vote_average)
      return {
        movies: state
      };
      case 'SORT_10-0':
        state.movies.results = state.movies.results.sort((a,b) => b.vote_average- a.vote_average)
      return {
        movies: state
      };
    default:
      throw new Error();
  }
};

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MoviesContext.Provider value={[state, dispatch]}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
