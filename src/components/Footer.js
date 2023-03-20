import React from 'react';
import github from '../utils/images/github.png';
import linkedin from '../utils/images/linkedin.png';

const Footer = () => {


    return (
        <div className='container-fluid d-flex flex-row justify-content-center position-relative fixed-bottom'>
            <a href='https://github.com/CJMerit'>
                <img src={github} alternative='github logo' style={{width:60,height:60}}></img>
            </a>
            <a href='https://www.linkedin.com/in/connor-mcgrath-46349223a/'>
                <img src={linkedin} alternative='linkedin logo' style={{width:60,height:60}}></img>
            </a>
        </div>
    )
    
}

export default Footer;