import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === '') {
            return <About />;
        }
        if (currentPage === 'Blog') {
            return <Blog />;
        }
            return <Contact />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="d-flex flex-row justify-content-between">
            <h1 className='col'>Portfolio for Connor McGrath</h1>
            <nav className='col navbar'>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </nav>
        </div>
    )
    
}

export default Header;