import React from 'react';
import github from '../utils/images/github.png';
import app from '../utils/images/app.png'

const Project = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => (
                <div className='card m-2 d-flex flex-row' key={project.title}>
                    <div className='col project'>
                        <h3 className='card-title ms-2'>
                            {project.title}
                        </h3>
                        <a href={project.githubLink} className='p-3'>
                            Github Repo
                            <img className='card-image mx-2' src={github} alt='github repo' style={{width:60,height:60}}></img>
                        </a>
                        <a href={project.deployedLink} className='p-2'>
                            Deployed App
                            <img className='card-image mx-2' src={app} alt='deployed app' style={{width:60,height:60}}></img>
                        </a>
                    </div>
                    <img className='card-image col' src={require(`../utils/images/${project.image}`)} alt={project.title} style={{width:400,height:300}}></img>
                </div>
            ))}
        </div>
    )
    
}

export default Project;