import React, { useState } from 'react';



function SearchBar() {

    const [filter, setFilter] = useState('');
    const [searchBusiness, setSearchBusiness] = useState('');
    const [searchLocation, setSearchLocation] = useState('');

    return (
        <div class="search-heading">
            <form id="filters">
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
            </form>
            <form id="searching">
                <input
                    type="search"
                    placeholder="Search Businesses"
                />
                <input
                    type="text"
                    placeholder="Where?"
                />
            </form>
            <form id="submitbutton">
                <button class="submit">
                    Let's Go
                </button>
            </form>
        </div>
    );
};

export default SearchBar;