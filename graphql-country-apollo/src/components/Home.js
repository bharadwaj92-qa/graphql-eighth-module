import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
{
    allCountries {
        id
        name
        capital
        currency
        population
    }
  }
`;

export default function Home() {

    const { loading, error, data } = useQuery(GET_COUNTRIES);
    const [deta, setDeta] = useState()
    const [selectedcoun, setSelectedCoun] = useState(null);
    const [selectedcap, setSelectedCap] = useState(null);
    const [selectedcurr, setSelectedCurr] = useState(null);
    const [selectedpopuln, setSelectedPopuln] = useState(null);

    const showDetails = (cun, cap, curr, populn) => {
        console.log(cap + "   " + curr + "   " + populn)
        setSelectedCoun(cun);
        setSelectedCap(cap);
        setSelectedCurr(curr);
        setSelectedPopuln(populn);
    }

    return (
        <div>
            {
                <div>
                    <h1>List of countries</h1>
                    {
                        data.allCountries.map((country, index) => (
                            <div key={country.id}>
                                <p>{country.name}</p>
                                <button onClick={() => showDetails(country.name, country.capital, country.currency, country.population)}>Details</button>
                            </div>


                        ))}
                    <div>
                        <h1>Country and its details:</h1>
                        {selectedcap && (
                            <><p>Country name: {selectedcoun}</p><><p>Capital:{selectedcap}</p><p>Currency:{selectedcurr}</p><p>Population:{selectedpopuln}</p></></>
                        )}
                    </div>
                </div>
            }
        </div >

    )
}
