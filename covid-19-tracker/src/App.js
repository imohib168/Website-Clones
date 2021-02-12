import React, { useEffect, useState } from 'react';
import './App.css';

import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';

// Importing Components
import InfoBox from './Components/InfoBox';
import Table from './Components/Table';
import LineGraph from './Components/LineGraph';
import { sortData, prettyPrintStat } from './utils';

// https://disease.sh/v3/covid-19/countries
// https://disease.sh/v3/covid-19/all
// https://disease.sh/v3/covid-19/countries/{country}
// https://disease.sh/v3/covid-19/historical/all?lastdays=120 

const App = () => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('WorldWide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all")
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);
            })
    }, [])

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then(response => response.json())
                .then(data => {
                    const countries = data.map(country => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2,
                        }
                    ))
                    const sortedData = sortData(data);
                    setTableData(sortedData);
                    setCountries(countries);
                })
                .catch(error => console.log(error))
        }

        getCountriesData();
    }, [])

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        const url = countryCode === "WorldWide"
            ? "https://disease.sh/v3/covid-19/all" :
            `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setCountry(countryCode);
                setCountryInfo(data);
            })
    }

    return (
        <>
            <div className="app">
                <div className="app__left">
                    <div className="app__header">
                        <h1 className="head">COVID-19 TRACKER</h1>
                        <FormControl className="app__dropdown">
                            <Select variant="outlined" value={country} onChange={onCountryChange}>
                                <MenuItem value="WorldWide">WorldWide</MenuItem>
                                {countries.map((country) => (
                                    <MenuItem value={country.value}>{country.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>

                    <div className="app__stats">
                        <InfoBox
                            isCasesActive
                            active={casesType === "cases"}
                            onClick={e => setCasesType('cases')}
                            title="CoronaVirus Cases"
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={prettyPrintStat(countryInfo.cases)} />
                        <InfoBox
                            isRecoveredActive
                            active={casesType === "recovered"}
                            onClick={e => setCasesType('recovered')}
                            title="Recovered"
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={prettyPrintStat(countryInfo.recovered)} />
                        <InfoBox
                            isDeathActive
                            active={casesType === "deaths"}
                            onClick={e => setCasesType('deaths')}
                            title="Deaths"
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={prettyPrintStat(countryInfo.deaths)} />
                    </div>

                    <h3 className="app__newCases">Worldwide New {casesType}</h3>
                    <LineGraph casesType={casesType} />

                </div>
                <Card className="app__right">
                    <CardContent>
                        <h3>Live Cases by Country</h3>
                        <Table countries={tableData} />
                    </CardContent>
                </Card>
            </div >
        </>
    )
}

export default App;
