import { AiOutlineGlobal } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GrDiamond } from "react-icons/gr";
import { IoIosMailOpen } from "react-icons/io";
import { IoHardwareChipSharp } from "react-icons/io5";
import BorderLineStyle from "../../components/border-line-style/BorderLineStyle";
import Cards from "../../components/cards/Cards";
import SERVICES from "../../assets/images/services.jpg";
import {
  ABOUT_AGENCY,
  ABOUT_AGENCY_CONTENT,
  ABOUT_AGENCY_HEADING,
  SERVICE_OUTLINE,
  SERVICE_WEB_BRANDING_CARDS_CONTENT,
  SERVICE_WEB_BRANDING_CARDS_HEADING,
  SERVICE_WEB_CUSTOMIZE_CARDS_CONTENT,
  SERVICE_WEB_CUSTOMIZE_CARDS_HEADING,
  SERVICE_WEB_DESIGN_CARDS_CONTENT,
  SERVICE_WEB_DESIGN_CARDS_HEADING,
  SERVICE_WEB_DEVELOPMENT_CARDS_CONTENT,
  SERVICE_WEB_DEVELOPMENT_CARDS_HEADING,
  SERVICE_WEB_MARKETING_CARDS_CONTENT,
  SERVICE_WEB_MARKETING_CARDS_HEADING,
  SERVICE_WEB_QUALITY_CARDS_CONTENT,
  SERVICE_WEB_QUALITY_CARDS_HEADING,
  SERVICES_CONTENT,
  SERVICES_HEADING,
} from "../../site-content/SiteContent";
import ProgressLine from "../../components/progress-line/ProgressLine";

const Services = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-5 flex flex-col text-center">
          <h3 className="text-baseSecondary uppercase mb-3">
            {SERVICE_OUTLINE}
          </h3>
          <h2 className="mb-3 text-3xl font-bold mb-3">{SERVICES_HEADING}</h2>
          <BorderLineStyle />
          <p className="text-baseSecondary mt-3 w-full md:w-1/2 mx-auto">
            {SERVICES_CONTENT}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          <Cards
            icon={<FaComputer size={70} />}
            heading={SERVICE_WEB_DESIGN_CARDS_HEADING}
            content={SERVICE_WEB_DESIGN_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
          <Cards
            style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
            icon={<AiOutlineGlobal size={70} />}
            heading={SERVICE_WEB_DEVELOPMENT_CARDS_HEADING}
            content={SERVICE_WEB_DEVELOPMENT_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
          <Cards
            icon={<GrDiamond size={70} />}
            heading={SERVICE_WEB_BRANDING_CARDS_HEADING}
            content={SERVICE_WEB_BRANDING_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
          <Cards
            style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
            icon={<IoHardwareChipSharp size={70} />}
            heading={SERVICE_WEB_CUSTOMIZE_CARDS_HEADING}
            content={SERVICE_WEB_CUSTOMIZE_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
          <Cards
            icon={<FaGift size={70} />}
            heading={SERVICE_WEB_QUALITY_CARDS_HEADING}
            content={SERVICE_WEB_QUALITY_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
          <Cards
            style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
            icon={<IoIosMailOpen size={70} />}
            heading={SERVICE_WEB_MARKETING_CARDS_HEADING}
            content={SERVICE_WEB_MARKETING_CARDS_CONTENT}
            contentStyle="text-baseSecondary"
          />
        </div>
      </div>
      <div className="bg-[#f9f9f9] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch relative z-[3]">
            <div className="bg-white py-10 px-6 md:order-first h-full flex flex-col justify-center rounded-lg">
              <h2 className="text-baseSecondary mb-2">{ABOUT_AGENCY}</h2>
              <h1 className="text-3xl mb-5 font-medium">
                {ABOUT_AGENCY_HEADING}
              </h1>
              <p className="text-baseSecondary mb-5">{ABOUT_AGENCY_CONTENT}</p>
              <ProgressLine
                percentage={80}
                color="#05bd93"
                title="Web Design"
              />
              <ProgressLine
                percentage={60}
                color="#05bd93"
                title="Development"
              />
              <ProgressLine percentage={55} color="#05bd93" title="Branding" />
              <ProgressLine percentage={75} color="#05bd93" title="Code" />
            </div>
            <div className="h-full rounded-lg overflow-hidden">
              <img
                src={SERVICES}
                alt="services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
