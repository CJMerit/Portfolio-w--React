import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {
  return (
    <div className="container-fluid">
        <div className="d-flex flex-row">
            <h1 className="col">
                <Header />
            </h1>
            <nav className="navbar col">
                <Navigation />
            </nav>
        </div>
    </div>



  )
}

export default App;
