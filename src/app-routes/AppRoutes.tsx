import { Routes, Route } from "react-router-dom";
import {
  CONTACT_US,
  HOME,
  PORTFOLIO,
  PRICING,
  PROCESS,
  SERVICES,
  TESTIMONIAL,
} from "./Routes_Names";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import ContactUs from "../pages/contact-us/ContactUs";
import Portfolio from "../pages/portfolio/Portfolio";
import Pricing from "../pages/pricing/Pricing";
import Process from "../pages/Process/Process";
import Testimonial from "../pages/testimonial/Testimonial";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={SERVICES} element={<Services />} />
        <Route path={CONTACT_US} element={<ContactUs />} />
        <Route path={PORTFOLIO} element={<Portfolio />} />
        <Route path={PRICING} element={<Pricing />} />
        <Route path={PROCESS} element={<Process />} />
        <Route path={TESTIMONIAL} element={<Testimonial />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
