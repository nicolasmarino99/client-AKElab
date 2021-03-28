import React, { createContext, useReducer } from 'react';

const initialState = {
  Movies: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MOVIES':
      state.Movies = [];

      let movies = [...state.movies, ...action.payload];
      return {
        movies: [...movies],
      };
    case 'FILTER_MOVIES_CATEGORIES':
      return {
        movies: state.movies.filter(
            category => category["genre_ids"] === action.payload,
          ),
      };
    case 'SORT_MOVIES_ASC':
      return {
        movies: state.movies.filter(
          category => category.genre_ids !== action.payload,
        ),
      };
    case 'SORT_MOVIES_DES':
        return {
        movies: state.movies.filter(
            category => category.genre_ids !== action.payload,
        ),
    };
    case 'SORT_0-10':
      return {
        movies: state.movies.state.movies.sort((a,b) => a- b)
      };
      case 'SORT_10-0':
      return {
        movies: state.moviesstate.movies.sort((a,b) => a- b)
      };
    default:
      throw new Error();
  }
};

export const MoviesContext = createContext();

const moviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <moviesContext.Provider value={[state, dispatch]}>
      {children}
    </moviesContext.Provider>
  );
};

export default moviesProvider;
© 2021 GitHub, Inc.