import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../../src/assets/css/navbar.css";

export default function SocialIcons() {
    const iconStyle = { color: '#1340DF' };
    const insta = { color: '#e74c3c' };
    const twitter = { color: '#3498db' };


  return (
    <>
              <FaFacebook style={iconStyle } className="mx-2 " size={24} />
              <FaTwitter style={twitter } className="mx-2 " size={24} />
              <FaInstagram style={insta } className="mx-2 " size={24} />
              <FaLinkedin style={iconStyle } className="mx-2 " size={24} />
              <FaGithub className="mx-2" size={24} />
    </>
  )
}
