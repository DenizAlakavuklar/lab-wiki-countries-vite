import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

function CountryDetails({ countries }) {
 
    const { alpha3Code } = useParams()
    
    const foundCountry = countries.find((oneCountry) => {
        return oneCountry.alpha3Code === alpha3Code;
      });

      console.log(foundCountry.area)

    return (
   
  
      <div>
          <h2>{foundCountry.name.official}</h2>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>{foundCountry.area} km²</td>
              </tr>
              
            </tbody>
          </table>
        </div>

    
        )
}

export default CountryDetails;