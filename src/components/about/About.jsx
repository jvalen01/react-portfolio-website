import React from 'react'
import './about.css'
import ME from '../../assets/picItaly.JPG'
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
              <small>6+ Years Programming</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Interests</h5>
              <small>Web Apps, Machine Learning
              </small>
            </article>
          </div>

          <p>
          Hi there! My name is Jonatan and I am a software developer. I have a background in computer technology and software engineering.
          I have been programming for over 6 years and have had two summer internships as a software developer. I have worked with many different languages and frameworks.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About