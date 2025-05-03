import BorderLineStyle from "../../components/border-line-style/BorderLineStyle";
import StepSection from "../../components/step-section/StepSection";
import {
  PROCESS_CONTENT,
  PROCESS_HEADING,
} from "../../site-content/SiteContent";

const Process = () => {
  return (
    <>
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-5 flex flex-col text-center">
          <h2 className="text-3xl font-bold mb-3">{PROCESS_HEADING}</h2>
          <BorderLineStyle />
          <p className="text-baseSecondary mt-3 w-full md:w-1/2 mx-auto">
            {PROCESS_CONTENT}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <StepSection />
      </div>
    </>
  );
};

export default Process;
