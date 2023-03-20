import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className='d-flex flex-column position-relative min-vh-100'>
            <Header />
            <Footer />
        </div>
    )
}

export default App;
