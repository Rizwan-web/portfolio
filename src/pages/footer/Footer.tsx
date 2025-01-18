import { NavLink } from "react-router-dom";
import {
  CONTACT_US,
  PROCESS,
  SERVICES,
  TESTIMONIAL,
} from "../../app-routes/Routes_Names";
import Logo from "../../components/header/Logo";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#182a32] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="w-32">
              <Logo />
            </div>
            <p className="text-gray-300">
              Your company description goes here. Add a brief about your
              business.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to={SERVICES}>Service</NavLink>
              </li>
              <li>
                <NavLink to={PROCESS}>Process</NavLink>
              </li>
              <li>
                <NavLink to={TESTIMONIAL}>Testimonial</NavLink>
              </li>
              <li>
                <NavLink to="#">Careers</NavLink>
              </li>
              <li>
                <NavLink to={CONTACT_US}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="space-y-2">
              <li>Web Application</li>
              <li>Mobile Application</li>
              <li>Server Management</li>
              <li>Business Ideas</li>
              <li>SEO</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">123 Street Name</li>
              <li className="text-gray-300">City, Country</li>
              <li className="text-gray-300">Phone: +1 234 567 890</li>
              <li className="text-gray-300">
                Email: rjtechnologies161@gmail.com
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-gray-300 hover:text-blue-600 text-xl" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-gray-300 hover:text-blue-700 text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/rjtechnologies161/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-300 hover:text-pink-500 text-xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} RJTechnologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
