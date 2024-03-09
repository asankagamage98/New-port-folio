import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../../src/assets/css/navbar.css";
import { motion } from "framer-motion";

export default function SocialIcons() {
    const iconStyle = { color: '#1340DF' };
    const insta = { color: '#e74c3c' };
    const twitter = { color: '#3498db' };
    const git ={color:"black"}



  
  return (
    <>
      <motion.a  whileHover={{ scale:1.3 }} href='https://www.facebook.com/profile.php?id=100008554757007&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer">
        <FaFacebook style={iconStyle} className="mx-2" size={24} />
      </motion.a>
      <motion.a whileHover={{ scale:1.3 }} href='https://x.com/AsankaGama24034?t=uWvmiwTdW997H0rKXU00xg&s=09' target="_blank" rel="noopener noreferrer">
        <FaTwitter style={twitter} className="mx-2" size={24} />
      </motion.a>
      <motion.a whileHover={{ scale:1.3 }} href='https://www.instagram.com/asanka_gamage98?igsh=c29zZmk4bDAzamhn' target="_blank" rel="noopener noreferrer">
        <FaInstagram style={insta} className="mx-2" size={24} />
      </motion.a>
      <motion.a whileHover={{ scale:1.3 }} href='https://www.linkedin.com/in/asanka-gamage-3816211a0/' target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={iconStyle} className="mx-2" size={24} />
      </motion.a>
      <motion.a whileHover={{ scale:1.3 }} href='https://github.com/asankagamage98' target="_blank" rel="noopener noreferrer">
        <FaGithub className="mx-2" size={24} style={git}/>
      </motion.a>
    </>
  )
}
