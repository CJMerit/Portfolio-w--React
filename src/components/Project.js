import React from 'react';
import projects from '../utils/projects'
import github from '../utils/images/github.png';
import app from '../utils/images/app.png'

const Project = () => {
    return (
        <div className='container m-2'>
            {projects.map((project) => (
                <div className='card' key={project.title}>
                    <img className='card-image' src={require(`../utils/images/${project.image}`)} alt={project.title}></img>
                    <div className='card-img-overlay'>
                        <h3 className='card-title'>
                            {project.title}
                        </h3>
                        <a href={project.githubLink}>
                            <img className='card-image' src={github} alternative='github repo' style={{width:60,height:60}}></img>
                        </a>
                        <a href={project.deployedLink}>
                            <img className='card-image' src={app} alternative='github repo' style={{width:60,height:60}}></img>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
    
}

export default Project;