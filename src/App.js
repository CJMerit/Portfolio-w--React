import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <div>
            <Header projects={projects}/>
            <Footer />
        </div>
    )
}

export default App;
