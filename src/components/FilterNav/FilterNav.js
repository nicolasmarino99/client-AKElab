import React, { useState, useRef } from 'react';
import Search from '../assets/imgs/Search.png'
import Filter from '../assets/imgs/Filter.png'
import Arrow from '../assets/imgs/Arrow.png'
import { motion } from "framer-motion";
import { dropdownAnimate } from '../../animations/FilterNav';
import CheckboxInput from './CheckboxInput/CheckboxInput';

const FilterNav = ({handleSubmit, genres}) => {
    const [isHover, toggleHover] = useState(false)
    const inputRef = useRef()
    const toggleMenu = () => {
        inputRef.current.focus()
        toggleHover(!isHover)
    }
    return (
        
        <nav>
            <div className="search">
                <input type="Text" />
                <button><img src={Search} alt="title"/></button>
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
                        <button>Nuevas - Antiguas</button>
                        <button>Antiguas - Nuevas</button>
                        <h2>Calificacion</h2>
                        <button>0 - 10 puntos</button>
                        <button>10 - 0 puntos</button>
                    </div>
                </motion.div>
                </div>
            </motion.div>

        </nav>
    );
}

export default FilterNav;
