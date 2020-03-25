import React from 'react';
import Temp from './Temp';
import Header from './Header';
import VirusInfo from './VirusInfo';
import '../styles/index.css';
import GlobalCases from './GlobalCases';

const App = () => {
    return (
        <div className='main-wrapper'>
            <Header />
            <Temp />
            <GlobalCases />
        </div>
    )
}

export default App;