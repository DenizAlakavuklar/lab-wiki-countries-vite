import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function CountriesList({ countries }) {
    return (
        <div>
            {countries.map((country) => (
                <div key={country.name.official} className="country">
                    <div>
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}></img>
                    </div>
                    <Link to={`/${country.alpha3Code}`}>
                        {country.alpha3Code}

                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CountriesList;