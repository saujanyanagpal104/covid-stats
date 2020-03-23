import React from 'react';
import Temp from './Temp';
import Header from './Header';
import '../styles/index.css';

const App = () => {
    return (
        <div className='main-wrapper'>
            <Header />
            <Temp />
        </div>
    )
}

export default App;