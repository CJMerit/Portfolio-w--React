import React, { useState } from 'react';
import Navigation from './components/Navigation';

const Header = ({ projects }) => {


    return (
        <div className="d-flex flex-row">
            <h1>Portfolio for Connor McGrath</h1>
            <nav>
                <Navigation projects={ projects }/>
            </nav>
        </div>
    )
    
}

export default Header;