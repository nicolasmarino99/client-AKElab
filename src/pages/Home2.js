import React, { useState, useEffect, useContext } from 'react';
import AnimatedIcon from '../animations/AnimatedIcon';
import { postElement } from '../apiCalls/apiCalls';
import Card from '../components/Card/Card';
import FilterNav from '../components/FilterNav/FilterNav';
import { MoviesContext } from '../contextProviders/MoviesProvider';
import "./Home2.scss";
const Home2 = ({loading}) => {
    const [state, dispatch] = useContext(MoviesContext);

    return (
        <div className="Home2">
            <h1 id="title">Películas</h1>
            {!loading ? <FilterNav loading={loading}/> : ''}
            <div className="cards-container">
                {!loading ? state.movies.results.map((movie,i) =>
                    <Card
                        title={movie.original_title}
                        img={movie.poster_path}
                        description={movie.overview}
                        rating={movie.vote_average}
                        genre={movie.genre_ids}
                        date={movie.release_date}
                        key={i}
                    />
                ): ''}
                {loading && <AnimatedIcon />}
            </div>
        </div>
    );
}

export default Home2;
