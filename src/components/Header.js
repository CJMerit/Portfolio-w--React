import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

import '../utils/styles/Header.css'

const Header = () => {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
            return <Resume />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <header className='container-fluid d-flex flex-column flex-grow-1'>
            <div className="row d-flex flex-row">
                <h1 className='col'>Portfolio for Connor McGrath</h1>
                <nav className='col navbar d-flex flex-wrap text-end'>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                </nav>
            </div>
            <div className='row container-fluid d-flex flex-column'>
                {renderPage()}
            </div>
        </header>
    )
    
}

export default Header;