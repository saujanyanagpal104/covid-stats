import React, {useState, useEffect } from 'react';
import Header from './Header';
import '../styles/index.scss';
import tableData from '../data/content.json';
import Tables from './Tables';
import SymptomsAndPrevention from './SymptomsAndPrevention';
import OverallData from './OverallData';
import DataBlocks from './DataBlocks';
import IndianCitiesData from './IndianCitiesData';
import TestingData from './TestingData';

const App = () => {
    const [statesData, setStatesData] = useState([]);
    const [statesDailyData, setStatesDailyData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [stateWiseTestingData, setStateWiseTestingData] = useState([]);
    const [stateDistrictWiseData, setStateDistrictWiseData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const statesData = await fetch('https://api.covid19india.org/data.json');
            const statesDailyData = await fetch('https://api.covid19india.org/states_daily.json');
            const stateWiseTestingData = await fetch('https://api.covid19india.org/state_test_data.json');
            const stateDistrictWiseData = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
            const jsonStateDistrictWiseData = await stateDistrictWiseData.json();
            const jsonStateWiseTestingData = await stateWiseTestingData.json();
            const jsonStatesData = await statesData.json();
            const jsonStatesDailyData = await statesDailyData.json();
            setStateDistrictWiseData(jsonStateDistrictWiseData);
            setStateWiseTestingData(jsonStateWiseTestingData.states_tested_data);
            setStatesDailyData(jsonStatesDailyData.states_daily);
            setStatesData(jsonStatesData);
            setFetched(true);
        };

        if (!fetched) {
            fetchData();
        }
    }, [fetched])

    const casesTimeSeries = fetched ? statesData.cases_time_series : [];
    const testing = (fetched) ? statesData.tested.reduce((accum, el) => (
        [...accum, {
            testsConductedByPrivateLabs: el.testsconductedbyprivatelabs,
            totalIndividualsTested: el.totalindividualstested,
            totalPositiveCases: el.totalpositivecases,
            totalSamplesTested: el.totalsamplestested,
            updateTimeStamp: el.updatetimestamp.split(' ')[0]
        }]
    ), []) : [];
    const stateWise = fetched ? statesData.statewise : [];
    const statesDaily = fetched ? statesDailyData.reduce((accum, el) => ([
        ...accum, {
            [el.date]: el
        }
    ]), []) : [];

    const stateWiseTesting = fetched ? stateWiseTestingData.reduce((accum, el) => (
        [...accum, {
            negative: el.negative,
            positive: el.positive,
            state: el.state,
            totalTested: el.totaltested,
            unconfirmed: el.unconfirmed,
            updatedOn: el.updatedon
        }]
    ), []) : [];

    const stateDistrictWise = fetched ? stateDistrictWiseData : [];

    return (
        <div className='main-wrapper'>
            <Header />
            <IndianCitiesData />
            <TestingData />
            <OverallData tableData={tableData} />
            <DataBlocks tableData={tableData} />
            <Tables tableData={tableData} />
            <SymptomsAndPrevention />
        </div>
    )
}

export default App;