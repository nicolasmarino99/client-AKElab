import React, { useContext, useState } from 'react';
import Filter from '../../../../assets/imgs/Filter.png'
import { MoviesContext } from '../../../../contextProviders/MoviesProvider';
import { motion } from 'framer-motion';
import { dropdownAnimate } from '../../../../animations/FilterNav';
import CheckboxInput from './CheckboxInput/CheckboxInput';


const CategotyFilter = () => {
    const [state, dispatch] = useContext(MoviesContext);
    const [isHover, toggleHover] = useState(false);
    //const inputRef = useRef()
    const toggleMenu = () => {
        //inputRef.current.focus()
        toggleHover(!isHover)
    }

    
    console.log(state.movies.genres)
    return (
       <motion.div
            className="filter"
            onHoverStart={toggleMenu}
            onHoverEnd={toggleMenu}
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
                <div className="sub-menu-container">
                    <h2>Genero</h2>
                    {state.movies.genres.map(item =><CheckboxInput name={item.name}/>)}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default CategotyFilter;
