import{ PORTFOLIO_CONTENT, PORTFOLIO_HEADING, PORTFOLIO_OUTLINE } from "../../site-content/SiteContent";
import BorderLineStyle from "../../components/border-line-style/BorderLineStyle";
import { useState } from 'react';
import PortfolioCard from "../../components/portfolio-card/portfolioCard";
import Button from "../../components/Button/Button";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Web Development', 'Web Design', 'Branding'];
  return <>
    <div className="container mx-auto px-4 md:px-6">
        <div className="py-5 flex flex-col text-center">
          <h3 className="text-baseSecondary uppercase mb-3">
            {PORTFOLIO_OUTLINE}
          </h3>
          <h2 className="text-3xl font-bold mb-3">{PORTFOLIO_HEADING}</h2>
          <BorderLineStyle />
          <p className="text-baseSecondary mt-3 w-full md:w-1/2 mx-auto">
            {PORTFOLIO_CONTENT}
          </p>
        </div>
        <div>
          <div className="flex border-b border-gray-200">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                label={tab}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 ${
                      activeTab === index
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'text-gray-500'
                    }`}
                style={{}}
              />
            ))}
          </div>
          <div className="p-4">
            {activeTab === 0 && <div className="grid grid-cols-3 gap-3"> 
              <PortfolioCard 
                ribon={true}
                backgroundImage="http://localhost:5173/public/realtor.png" 
                heading="Project 1" 
                content="This is dummy content you can follow us at Arhamsoft"
                link="https://example.com"
              />
              <PortfolioCard
                ribon={true}
                backgroundImage="http://localhost:5173/public/efuel.png" 
                heading="Project 1" 
                content="This is dummy content you can follow us at Arhamsoft"
                link="https://example.com"
              />
              <PortfolioCard 
                ribon={false}
                backgroundImage="http://localhost:5173/public/cleaning-service.png" 
                heading="Project 1" 
                content="This is dummy content you can follow us at Arhamsoft"
                link="https://example.com"
              />
            </div>}
            {activeTab === 1 && <div> 
            
            </div>}
            {activeTab === 2 && <div>
            
            </div>}
          </div>
        </div>
      </div>
  </>;
};

export default Portfolio;
