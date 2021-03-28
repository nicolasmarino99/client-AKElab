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
    case 'SEARCH_MOVIE':
        return {
            movies: state.movies.filter(
                name => name["original_title"] === action.payload,
              ),
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

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MoviesContext.Provider value={[state, dispatch]}>
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
