import React, { useContext, useState } from 'react';
import { MoviesContext } from '../../../contextProviders/MoviesProvider';
import Search from '../../../assets/imgs/Search.png'

const SearchMovieBtn = () => {
    const [state, dispatch] = useContext(MoviesContext);
    const [query, setQuery] = useState('');
    const handleOnChange = e => setQuery(e.target.value);

    const handleSearchBtn = query => {
        dispatch({
            type: 'SEARCH_MOVIE',
            payload: query,
        });
    };

    return (
        <div className="search">
            <input type="Text" placeholder="Busca una pelicula..." onChange={handleOnChange}/>
            <button>
                <img src={Search} alt="title"/>
            </button>
        </div>
    );
}

export default SearchMovieBtn;
