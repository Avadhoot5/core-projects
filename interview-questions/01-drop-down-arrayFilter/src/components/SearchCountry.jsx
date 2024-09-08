import React, { useState } from 'react'

const SearchCountry = ({countries}) => {

    const [search, setSearch] = useState('');

    const filterCountry = countries.filter((value) => {
        return value.name.toLowerCase().includes(search.toLowerCase());
    })

  return (
    <div>
        <div className="search-input">
            <input type="text" placeholder='Search Country...' 
            onChange={(e) => {
                setSearch(e.target.value);
            }}/>
        </div>
        <div className="country-list">
            {filterCountry.map((value, index) => (
                <li key={index}>{value.name}</li>
            ))}
        </div>
    </div>
  )
}

export default SearchCountry