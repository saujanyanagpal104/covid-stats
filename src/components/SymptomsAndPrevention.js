import React from 'react';
import symptomsImage from '../assets/symptoms.png';
import howItSpreadsImage from '../assets/block-one.png';
import preventionImage from '../assets/block-two.png';

const SymptomsAndPrevention = () => (
    <div className='symptoms-and-prevention'>
        <div className='symptoms'>
            <img src={symptomsImage} alt='symptomes' />
        </div>
        <div className='spread-and-prevention'>
            <div className='how-it-spreads'>
                <span className='how-it-spreads-heading'>HOW IT SPREADS</span>
                <img src={howItSpreadsImage} alt='how-it-spreads' />
            </div>
            <div className='prevention'>
                <span className='prevention-heading'>PREVENTION</span>
                <img src={preventionImage} alt='prevention' />
            </div>
        </div>
    </div>
)

export default SymptomsAndPrevention;