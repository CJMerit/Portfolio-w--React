import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

import projects from './utils/projects'

function App() {
  return (
    <div className="container-fluid">
      <Header projects={projects}/>
      <Project projects={projects}/>
      <Footer />
    </div>
  )
}

export default App;
