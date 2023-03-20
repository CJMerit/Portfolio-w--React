import React from 'react';
import projects from '../../utils/projects'
import Project from '../Project'

const Portfolio = () => {

    return (
        <div>
            <Project projects={projects} />
        </div>
    )
    
}

export default Portfolio;