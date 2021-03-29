import React from 'react';
import CategotyFilter from './options/CategoryFilter/CategotyFilter';
import OrderBtns from './options/OrderBtns';
import SearchMovieBtn from './options/SearchMovieBtn';


const FilterNav = () => (
    <nav>
        <SearchMovieBtn />
        <CategotyFilter />
        <OrderBtns />
    </nav>
);


export default FilterNav;
