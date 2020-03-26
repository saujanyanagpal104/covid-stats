import React from 'react';
import Temp from './Temp';
import Header from './Header';
import VirusInfo from './VirusInfo';
import '../styles/index.css';
import GlobalCases from './GlobalCases';
import TodayTable from './TodayTable';
import YesterdayTable from './YesterdayTable';
import tableData from '../data/content.json';

const App = () => {
    return (
        <div className='main-wrapper'>
            <Header />
            <Temp />
            <GlobalCases />
            <TodayTable tableData={tableData} />
            <YesterdayTable tableData={tableData} />
        </div>
    )
}

export default App;