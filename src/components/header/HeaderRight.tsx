import { Link } from "react-router-dom";
import {
  HOME,
  SERVICES,
  PROCESS,
  TESTIMONIAL,
  PORTFOLIO,
  PRICING,
  CONTACT_US,
} from "../../app-routes/Routes_Names";

const HeaderRight = () => {
  return (
    <div className="flex items-center">
      <ul className="flex space-x-6">
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={HOME}>Home</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={SERVICES}>Services</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={PROCESS}>Process</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={TESTIMONIAL}>Testimonial</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={PORTFOLIO}>Portfolio</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={PRICING}>Pricing</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">
          <Link to={CONTACT_US}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderRight;
