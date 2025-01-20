import BannerImage from "../../assets/images/home1.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {
  BANNER_TITLE,
  BANNER_SUB_TITLE,
  BANNER_DESC,
} from "../../site-content/SiteContent";
const Banner = () => {
  return (
    <>
      <section className="bg-home py-40 bg-cover bg-center bg-no-repeat relative" id="home">
        <div className="bg-cyan-950 bg-overlay opacity-90 absolute left-0 right-0 bottom-0 top-0"></div>
        <div className="container relative mx-auto px-4">
          <div className="items-center grid grid-cols-2">
            <div className="grid-cols-1">
              <div className="home-content me-lg-5 w-3/4">
                <h6 className="sub-title mb-3 text-white text-xl font-semibold">
                  {BANNER_SUB_TITLE}
                </h6>
                <h1 className="mb-4 text-white text-4xl font-bold leading-normal">
                  {BANNER_TITLE}
                  <span className="text-primary text-emerald-500"> zoric</span>
                </h1>
                <p className="text-white fs-17">{BANNER_DESC}</p>
                <div className="mt-4">
                  <Link className="mr-3" to="/">
                    <Button
                      label="Get Started"
                      onClick={() => alert("Button Clicked!")}
                      className="bgButton"
                      style={{}}
                    />
                  </Link>
                  <Link to="/">
                    <Button
                      label="Learn more"
                      onClick={() => alert("Button Clicked!")}
                      className="bgTransparent"
                      style={{}}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid-cols-1">
              <div className="home-dashboard mt-4 mt-lg-0 py-2 px-2 relative">
                <img
                  src={BannerImage}
                  alt="Home Dashboard"
                  className="img-fluid w-100"
                />
                <div className="play-btn absolute top-1/2 left-1/2">
                  <Link className="image-popup" to="/">
                    <i className="mdi mdi-motion-play"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute right-0 bottom-0 left-0">
          <svg className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="1440"
            height="150"
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
          >
            <g mask='url("#SvgjsMask1022")' fill="none">
              <path
                d="M 0,58 C 144,73 432,131.8 720,133 C 1008,134.2 1296,77.8 1440,64L1440 250L0 250z"
                fill="rgba(255, 255, 255, 1)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;
