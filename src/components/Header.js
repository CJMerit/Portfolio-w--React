import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
        <div className='container-fluid d-flex flex-column justify-content-center'>
            <div className="row d-flex flex-row">
                <h1 className='col'>Portfolio for Connor McGrath</h1>
                <nav className='col navbar text-end'>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                </nav>
            </div>
            <div className='row'>
                {renderPage()}
            </div>
        </div>
    )
    
}

export default Header;