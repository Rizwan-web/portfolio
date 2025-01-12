import BorderLineStyle from "../../components/border-line-style/BorderLineStyle";
import Cards from "../../components/cards/Cards";
import {
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
import { FaComputer } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { GrDiamond } from "react-icons/gr";
import { IoHardwareChipSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

const Services = () => {
  return (
    <div>
      <div className="py-5 flex flex-col">
        <h3 className="text-baseSecondary uppercase mb-3">{SERVICE_OUTLINE}</h3>
        <h2 className="mb-3 text-3xl font-bold mb-3">{SERVICES_HEADING}</h2>
        <BorderLineStyle />
        <p className="mt-3 w-full md:w-1/2 mx-auto text-center">
          {SERVICES_CONTENT}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Cards
          icon={<FaComputer size={70} />}
          heading={SERVICE_WEB_DESIGN_CARDS_HEADING}
          content={SERVICE_WEB_DESIGN_CARDS_CONTENT}
        />
        <Cards
          style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
          icon={<AiOutlineGlobal size={70} />}
          heading={SERVICE_WEB_DEVELOPMENT_CARDS_HEADING}
          content={SERVICE_WEB_DEVELOPMENT_CARDS_CONTENT}
        />
        <Cards
          icon={<GrDiamond size={70} />}
          heading={SERVICE_WEB_BRANDING_CARDS_HEADING}
          content={SERVICE_WEB_BRANDING_CARDS_CONTENT}
        />
        <Cards
          style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
          icon={<IoHardwareChipSharp size={70} />}
          heading={SERVICE_WEB_CUSTOMIZE_CARDS_HEADING}
          content={SERVICE_WEB_CUSTOMIZE_CARDS_CONTENT}
        />
        <Cards
          icon={<FaGift size={70} />}
          heading={SERVICE_WEB_QUALITY_CARDS_HEADING}
          content={SERVICE_WEB_QUALITY_CARDS_CONTENT}
        />
        <Cards
          style="shadow-[0_10px_22px_rgba(0,0,0,0.05)]"
          icon={<IoIosMailOpen size={70} />}
          heading={SERVICE_WEB_MARKETING_CARDS_HEADING}
          content={SERVICE_WEB_MARKETING_CARDS_CONTENT}
        />
      </div>
    </div>
  );
};

export default Services;
