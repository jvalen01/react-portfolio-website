import React from 'react'
import './about.css'
import ME from '../../assets/me.PNG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>7+ Years Programming</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Interests</h5>
              <small>System and Web Development, Stock Trading
              </small>
            </article>
          </div>

          <p>
          Hi there! My name is Jonatan and I am a software developer. I hold a bachelor’s degree in computer technology and I'm currently on my second year of a master’s 
          degree in software engineering. 
          I have been programming for over 7 years and have had 3 summer internships as a software developer. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About