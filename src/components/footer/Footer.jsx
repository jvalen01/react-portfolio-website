import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jonatan Valen</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100008296033317"target='blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/jonatanvalen/"target='blank'><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/jonatan-valen-854045235/" target='blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jonatan Valen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer