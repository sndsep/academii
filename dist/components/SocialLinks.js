import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaTwitch, FaDiscord } from 'react-icons/fa';
const SocialLinks = () => {
    return (<div className="flex space-x-4">
      <a href="https://www.linkedin.com/company/vfx-academy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaLinkedin size={24}/>
      </a>
      <a href="https://www.instagram.com/vfxacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaInstagram size={24}/>
      </a>
      <a href="https://www.facebook.com/vfxacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaFacebook size={24}/>
      </a>
      <a href="https://twitter.com/vfxacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaTwitter size={24}/>
      </a>
      <a href="https://www.twitch.tv/vfxacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaTwitch size={24}/>
      </a>
      <a href="https://discord.gg/vfxacademy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
        <FaDiscord size={24}/>
      </a>
    </div>);
};
export default SocialLinks;
