import BannerImage from '../../assets/images/home1.png'
import { Link } from "react-router-dom";
import Button from '../Button/Button';
import { BANNER_TITLE, BANNER_SUB_TITLE, BANNER_DESC } from '../../site-content/SiteContent';
const Banner = () => {
  return (
    <section className="bg-home bg-green-950" id="home">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="items-center flex">
          <div className="grid-cols-6">
            <div className="home-content me-lg-5">
              <h6 className="sub-title mb-3 text-white">{BANNER_SUB_TITLE}</h6>
              <h1 className="mb-4 text-white">
                  {BANNER_TITLE}
                {/* <span className="text-primary">zoric</span> */}
              </h1>
              <p className="text-white-50 fs-17">
                {BANNER_DESC}
              </p>
              <div className="mt-4">
                <Link className='mr-3' to="/">
                  <Button
                    label="Get Started"
                    onClick={() => alert("Button Clicked!")}
                    className="text-slate-50 hover:bg-emerald-700 hover:border-emerald-700 bg-emerald-500 border border-emerald-500"
                    style={{}}
                  />
                </Link>
                <Link to="/">
                  <Button
                    label="Learn more"
                    onClick={() => alert("Button Clicked!")}
                    className="text-slate-50 hover:bg-white hover:text-black border border-white"
                    style={{}}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid-cols-6">
            <div className="home-dashboard mt-4 mt-lg-0">
              <img src={BannerImage}
                alt="Home Dashboard"
                className="img-fluid"
                width={600}
                height={400}
              />
              <div className="play-btn">
                <Link className="image-popup" to="/">
                  <i className="mdi mdi-motion-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
