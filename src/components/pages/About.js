import React from 'react';
import profile from '../../utils/images/Profile-Picture.png'

const styles = {
    card: {
        background: '#006682'
    }
}

const About = () => {

    return (
        <div className='card' style={styles.card}>
            <div className='card-body'>
                <h2 className='card-title fs-1'>
                    <img className='img-fluid mx-2' src={profile} alt='Connor McGrath' style={{width:100,height:100,borderRadius:100}}></img>
                    Connor McGrath
                </h2>
                <p className='fs-2 card-text'>
                    My name is Connor McGrath (he/him), and I started my path into web development in 2022. 
                    I started with a 6-month course, and I have now completed many projects over the years. 
                    My personal favorite works are showcased in the Portfolio section.
                    <br></br>
                    <br></br>
                    I am a family man first, with my wife Sara and my two children, Charlotte and Felix.
                    Second, I am a lover of technology. Learning the ins and outs of all different 
                    forms of tech is my passion in life, and I am always learning new techniques for 
                    development.
                </p>
            </div>
        </div>
    )
    
}

export default About;