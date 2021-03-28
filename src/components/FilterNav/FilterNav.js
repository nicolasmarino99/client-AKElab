import React, { useState, useRef, useContext } from 'react';
import Search from '../assets/imgs/Search.png'
import Filter from '../assets/imgs/Filter.png'
import Arrow from '../assets/imgs/Arrow.png'
import { motion } from "framer-motion";
import { dropdownAnimate } from '../../animations/FilterNav';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import { MoviesContext } from '../../contextProviders/MoviesProvider';

const FilterNav = ({genres}) => {
    const [isHover, toggleHover] = useState(false)
    const [query, setQuery] = useState('');
    const [state, dispatch] = useContext(MoviesContext);
    const inputRef = useRef()
    const handleOnChange = e => setQuery(e.target.value);
    const toggleMenu = () => {
        inputRef.current.focus()
        toggleHover(!isHover)
    }
    const handleASCBtn = () => {
        dispatch({
            type: 'SORT_MOVIES_ASC',
        });
    };
    const handleDESBtn = () => {
        dispatch({
            type: 'SORT_MOVIES_DES',
        });
    };
    const handle10_0Btn = () => {
        dispatch({
            type: 'SORT_10-0',
        });
    };
    const handle0_10Btn = () => {
        dispatch({
            type: 'SORT_0-10',
        });
    };

    const handleSearchBtn = query => {
        dispatch({
            type: 'SEARCH_MOVIE',
            payload: query,
        });
    };
    
    const handleFilterBtn = category => {
        dispatch({
            type: 'FILTER_MOVIES_CATEGORIES',
            payload: category,
        });
    };
    return (
        <nav>
            <div className="search">
                <input type="Text" placeholder="Busca una pelicula..." onChange={handleOnChange}/>
                <button onClick={handleSearchBtn(query)}>
                    <img src={Search} alt="title"/>
                </button>
            </div>
            <motion.div
                className="filter"
                onHoverStart={toggleMenu}
                onHoverEnd={toggleMenu}
                ref={inputRef}
            >
                <div>
                    <button><img src={Filter} alt="title"/></button>
                </div>
                <motion.div
                    className="menu"
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={dropdownAnimate}
                >
                    <div className="sub-menu-background" />
                    <div className="sub-menu-container">
                        <h2>Genero</h2>
                        {genres.map(item =><CheckboxInput name={item.name}/>)}
                    </div>
                </motion.div>
            </motion.div>
            <motion.div
                className="Sort"
                onHoverStart={toggleMenu}
                onHoverEnd={toggleMenu}
                ref={inputRef}
            >
                <div>
                    <p>Ordenar</p>
                    <button> <img src={Arrow} alt="title"/></button>
                    <motion.div
                    className="menu"
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={dropdownAnimate}
                >
                    <div className="sub-menu-background" />
                    <div className="sub-menu-container">
                        <h2>Fecha</h2>
                        <button onClick={handleASCBtn}>Nuevas - Antiguas</button>
                        <button onClick={handleDESBtn} >Antiguas - Nuevas</button>
                        <h2>Calificacion</h2>
                        <button onClick={handle0_10Btn }>0 - 10 puntos</button>
                        <button onClick={handle10_0Btn}>10 - 0 puntos</button>
                    </div>
                </motion.div>
                </div>
            </motion.div>

        </nav>
    );
}

export default FilterNav;
