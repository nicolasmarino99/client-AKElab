import React, { useState, useEffect, useContext } from 'react';
import { postElement } from '../apiCalls/apiCalls';
import Card from '../components/Card/Card';
import FilterNav from '../components/FilterNav/FilterNav';
import { MoviesContext } from '../contextProviders/MoviesProvider';

const Home = () => {
    const [state, dispatch] = useContext(MoviesContext);

    const MoviesEndpoint = `http://localhost:5000/movies`;

    const getMoviesInfo = postElement

    const handleSearchBtn = query => {
        dispatch({
            type: 'SEARCH_MOVIE',
            payload: query,
        });
    };
    const handleFilterBtn = (category) => {
        getMoviesInfo('DEL_CATEGORY', categoriesUrl + category.id, dispatch, category.id);
    };
    const handleASCBtn = (category) => {
        getMoviesInfo('DEL_CATEGORY', categoriesUrl + category.id, dispatch, category.id);
    };
    const handleDESBtn = (category) => {
        getMoviesInfo('DEL_CATEGORY', categoriesUrl + category.id, dispatch, category.id);
    };


    useEffect(() => {
        getMoviesInfo({ akelab: 123456789 }, 'SHOW_MOVIES', MoviesEndpoint, dispatch);
    }, []);
    return (
        <div>
            <FilterNav handleSubmit={} genres={state.movies.genres}/>
            {state.movies.results.map(movie =>
                <Card
                    title={movie.original_title}
                    img={movie.poster_path}
                    description={movie.overview}
                    rating={movie.vote_average}
                    genre={movie.genre_ids}
                    date={movie.release_date}
                    genres={state.movies.genres}
                />
            )}
        </div>
    );
}

export default Home;
