import React, { useEffect } from 'react';
import { useState } from 'react';


const Search = ({ setSearch }) => {
    const [cityName, setCityName] = useState("");
    let handleSubmit = (e) => {
        e.preventDefault()
        setSearch(cityName)
    }
    useEffect(() => {
        setSearch("Tbilisi")
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setCityName(e.target.value)}></input>
                <button>Search</button>
            </form>

        </div>
    );
};

export default Search;