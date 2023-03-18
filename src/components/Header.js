import React, { useState } from 'react';
import Navigation from './components/Navigation';

const Header = () => {


    return (
        <div className="d-flex flex-row">
            <p>Header to go here</p>
            <nav>
                <Navigation />
            </nav>
        </div>
    )
    
}

export default Header;