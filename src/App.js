import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Project from './components/Project';

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <Project />
        <Footer />
    </div>



  )
}

export default App;
