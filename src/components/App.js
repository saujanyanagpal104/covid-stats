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
import MessageStrip from './MessageStrip';

const App = () => {
    const [statesData, setStatesData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [stateDistrictWiseData, setStateDistrictWiseData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const statesData = await fetch('https://api.covid19india.org/data.json');
            const stateDistrictWiseData = await fetch('https://api.covid19india.org/v2/state_district_wise.json');
            const jsonStateDistrictWiseData = await stateDistrictWiseData.json();
            const jsonStatesData = await statesData.json();
            setStateDistrictWiseData(jsonStateDistrictWiseData);
            setStatesData(jsonStatesData);
            setFetched(true);
        };

        if (!fetched) {
            fetchData();
        }
    }, [fetched])

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

    const stateDistrictWise = fetched ? stateDistrictWiseData : [];

    return (
        <div className='main-wrapper'>
            <Header />
            <MessageStrip />
            <OverallData tableData={tableData} />
            <IndianCitiesData stateWise={stateWise} stateDistrictWise={stateDistrictWise} />
            <TestingData testingStats={testing} />
            <DataBlocks tableData={tableData} />
            <Tables tableData={tableData} />
            <SymptomsAndPrevention />
        </div>
    )
}

export default App;