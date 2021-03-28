import React, { useState } from 'react';
import FilterNav from '../components/FilterNav/FilterNav';

const Home = () => {
    const [query, setQuery] = useState('');
    const handleSearchquery = e => setQuery(e.target.value)
    return (
        <div>
            <FilterNav />

        </div>
    );
}

export default Home;
