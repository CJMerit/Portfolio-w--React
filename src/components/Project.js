import React from 'react';
import github from '../utils/images/github.png';
import app from '../utils/images/app.png'

const Project = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => (
                <div className='card m-2 d-flex flex-row' key={project.title}>
                    <div className='col'>
                        <h3 className='card-title'>
                            {project.title}
                        </h3>
                        <a href={project.githubLink}>
                            <img className='card-image' src={github} alt='github repo' style={{width:60,height:60}}></img>
                        </a>
                        <a href={project.deployedLink}>
                            <img className='card-image' src={app} alt='deployed app' style={{width:60,height:60}}></img>
                        </a>
                    </div>
                    <img className='card-image col' src={require(`../utils/images/${project.image}`)} alt={project.title} style={{width:400,height:300}}></img>
                </div>
            ))}
        </div>
    )
    
}

export default Project;