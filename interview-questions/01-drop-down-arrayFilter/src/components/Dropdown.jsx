import React from 'react'
import { useState } from 'react';

const Dropdown = ({countries}) => {

  const [country, setCountry] = useState('');

  return (
    <div>
    {/* 1.Drop down element */}
      <div>
        <div className="first-select-country">
          <label>Select Country: </label>
          <select name="countries" 
          onChange={(e) => {
            let find = countries.find(a => a.name === e.target.value);
            setCountry(find);
          }}>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className="second-select-city">
          <label>Select City: </label>
          <select name="countries">
            {country.cities?.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>

      </div>
    </div>
  )
}

export default Dropdown;