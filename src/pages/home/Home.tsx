import Banner from "../../components/banner/Banner";
import PortfolioCard from "../../components/portfolio-card/portfolioCard";

const Home = () => {
  return <>
    <Banner></Banner>
    <section className="bg-[url('/public/our-process-bg.png')]">
      <div className="text-4xl font-semibold text-center py-7">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-emerald-950">
          Our Portfolio
        </span>
      </div>
        <div className="grid grid-cols-3 gap-3">
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
          <PortfolioCard 
            ribon={false}
            backgroundImage="http://localhost:5173/public/cleaning-service.png" 
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
          <PortfolioCard 
            ribon={false}
            backgroundImage="http://localhost:5173/public/cleaning-service.png" 
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
          <PortfolioCard 
            ribon={false}
            backgroundImage="http://localhost:5173/public/cleaning-service.png" 
            heading="Project 1" 
            content="This is dummy content you can follow us at Arhamsoft"
            link="https://example.com"
          />
        </div>
      </section>
  </>;
};

export default Home;
