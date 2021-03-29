import React, { useState, useEffect, useContext } from 'react';
import AnimatedIcon from '../animations/AnimatedIcon';
import { postElement } from '../apiCalls/apiCalls';
import Card from '../components/Card/Card';
import FilterNav from '../components/FilterNav/FilterNav';
import { MoviesContext } from '../contextProviders/MoviesProvider';

const Home2 = ({loading}) => {
    const [state, dispatch] = useContext(MoviesContext);

    console.log(state, 'home2')
    return (
        <div className="Home2">
            {!loading ? <FilterNav /> : <p></p>}
            {!loading ? state.movies.results.map(movie =>
                <Card
                    title={movie.original_title}
                    img={movie.poster_path}
                    description={movie.overview}
                    rating={movie.vote_average}
                    genre={movie.genre_ids}
                    date={movie.release_date}
                />
            ): <p></p>}
            {loading && <AnimatedIcon />}
        </div>
    );
}

export default Home2;