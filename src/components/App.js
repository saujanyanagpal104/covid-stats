import React from 'react';
import Header from './Header';
import '../styles/index.scss';
import tableData from '../data/content.json';
import Tables from './Tables';
import SymptomsAndPrevention from './SymptomsAndPrevention';
import OverallData from './OverallData';
import DataBlocks from './DataBlocks';

const App = () => {
    return (
        <div className='main-wrapper'>
            <Header />
            <SymptomsAndPrevention />
            <OverallData tableData={tableData} />
            <DataBlocks tableData={tableData} />
            <Tables tableData={tableData} />
        </div>
    )
}

export default App;