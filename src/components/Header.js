import React from 'react';
import Logo from '../assets/Logo.jpg'

const Header = () => (
    <div className='header'>
        <div className='title-and-logo'>
            <img src={Logo} alt='covid-19' />
            <h1>COVID-19</h1>
        </div>
    </div>
)

export default Header;