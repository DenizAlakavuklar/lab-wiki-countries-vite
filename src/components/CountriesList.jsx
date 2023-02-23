import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.name.official} className="country">
          <Link to={`/${country.alpha3Code}`}>
          {country.alpha3Code}
          
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;