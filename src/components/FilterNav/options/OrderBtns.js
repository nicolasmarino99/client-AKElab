import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';
import { dropdownAnimate } from '../../../animations/FilterNav';
import { MoviesContext } from '../../../contextProviders/MoviesProvider';
import Arrow from '../../../assets/imgs/Arrow.png'

const OrderBtns = () => {
    const [isHover, toggleHover] = useState(false)
    const [state, dispatch] = useContext(MoviesContext);

    const toggleMenu1 = () => {
        //inputRef.current.focus()
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
    return (
        <motion.div
                className="Sort"
                onHoverStart={toggleMenu1}
                onHoverEnd={toggleMenu1}
                
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
    );
}

export default OrderBtns;
