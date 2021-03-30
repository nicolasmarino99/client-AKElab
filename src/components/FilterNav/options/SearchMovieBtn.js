import React, { useContext, useState } from 'react';
import { MoviesContext } from '../../../contextProviders/MoviesProvider';
import Search from '../../../assets/imgs/Search.png'

const SearchMovieBtn = () => {
    const [state, dispatch] = useContext(MoviesContext);
    const [query, setQuery] = useState('');
    const handleSearchBtn = query => {
        dispatch({
            type: 'SEARCH_MOVIE',
            payload: query,
        });
    };

    const handleOnChange = e => {
        setQuery(e.target.value);
        handleSearchBtn(query)
    }

    
    return (
        <div className="search">
            <input type="Text" placeholder="Busca una pelicula..." onChange={handleOnChange}/>
            <button onClick={handleOnChange}>
                <img src={Search} alt="title"/>
            </button>
        </div>
    );
}

export default SearchMovieBtn;
