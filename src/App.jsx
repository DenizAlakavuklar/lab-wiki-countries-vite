import { useState } from "react"
import "./App.css"
import allCountries from "./countries.json"
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import { Routes, Route } from "react-router-dom"
import CountryDetails from "./components/CountryDetails"

function App() {
  const [countries, setCountries] = useState(allCountries);
  return (
    <div className="App">
      <Navbar />
      <div >
        <Routes>
          <Route path="/:alpha" element={<CountryDetails countries={countries} />} />

        </Routes>

        <CountriesList countries={countries} />


      </div>
    </div>
  );
}

export default App;