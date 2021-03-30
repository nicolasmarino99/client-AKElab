import React from 'react';
import CategotyFilter from './options/CategoryFilter/CategotyFilter';
import OrderBtns from './options/OrderBtns';
import SearchMovieBtn from './options/SearchMovieBtn';
import "./FilterNav.scss";


const FilterNav = ({loading}) => (
    <nav>
        <SearchMovieBtn />
        <CategotyFilter loading={loading}/>
        <OrderBtns />
    </nav>
);


export default FilterNav;
