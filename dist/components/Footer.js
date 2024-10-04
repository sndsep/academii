import React from 'react';
import SocialLinks from './SocialLinks';
const Footer = () => {
    return (<footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">VFX Academy</h3>
            <p className="mb-4">&copy; 2024 VFX Academy. All rights reserved.</p>
            <SocialLinks />
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Courses</h4>
            <ul className="space-y-2">
              <li><a href="/courses/3d-modeling" className="hover:text-gray-300">3D Modeling</a></li>
              <li><a href="/courses/animation" className="hover:text-gray-300">Animation</a></li>
              <li><a href="/courses/compositing" className="hover:text-gray-300">Compositing</a></li>
              <li><a href="/courses/vfx-basics" className="hover:text-gray-300">VFX Fundamentals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li><a href="/about/history" className="hover:text-gray-300">Our History</a></li>
              <li><a href="/about/mission" className="hover:text-gray-300">Mission and Vision</a></li>
              <li><a href="/about/team" className="hover:text-gray-300">Our Team</a></li>
              <li><a href="/about/facilities" className="hover:text-gray-300">Facilities</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Projects</h4>
            <ul className="space-y-2">
              <li><a href="/projects/student-showcase" className="hover:text-gray-300">Student Works</a></li>
              <li><a href="/projects/industry-collaborations" className="hover:text-gray-300">Industry Collaborations</a></li>
              <li><a href="/projects/research" className="hover:text-gray-300">Research and Development</a></li>
              <li><a href="/projects/competitions" className="hover:text-gray-300">Competitions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Teachers</h4>
            <ul className="space-y-2">
              <li><a href="/teachers/profiles" className="hover:text-gray-300">Teacher Profiles</a></li>
              <li><a href="/teachers/guest-lectures" className="hover:text-gray-300">Guest Lectures</a></li>
              <li><a href="/teachers/workshops" className="hover:text-gray-300">Workshops</a></li>
              <li><a href="/teachers/mentorship" className="hover:text-gray-300">Mentorship Program</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>);
};
export default Footer;
