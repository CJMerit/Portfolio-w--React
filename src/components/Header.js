import React, { useState } from 'react';
import Navigation from './components/Navigation';

const Header = () => {


    return (
        <div className="d-flex flex-row">
            <h1>Portfolio for Connor McGrath</h1>
            <nav>
                <Navigation />
            </nav>
        </div>
    )
    
}

export default Header;