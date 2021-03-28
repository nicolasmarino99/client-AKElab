import React, { useState, useEffect, useContext } from 'react';
import { postElement } from '../apiCalls/apiCalls';
import FilterNav from '../components/FilterNav/FilterNav';
import { MoviesContext } from '../contextProviders/MoviesProvider';

const Home = () => {
    const [query, setQuery] = useState('');
    const handleSearchquery = e => setQuery(e.target.value)
    const [state, dispatch] = useContext(MoviesContext);

    const MoviesEndpoint = `http://localhost:5000/movies`;

    const getMoviesInfo = postElement

    useEffect(() => {
        getMoviesInfo({ akelab: 123456789 }, 'SHOW_MOVIES', MoviesEndpoint, dispatch);
    }, []);
    return (
        <div>
            <FilterNav />

        </div>
    );
}

export default Home;
