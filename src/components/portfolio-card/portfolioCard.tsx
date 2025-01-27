import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface CardProps {
  heading?: string;
  content?: string;
  ribon?: boolean;
  backgroundImage?: any;
  link?: any;
}
const portfolioCard: React.FC<CardProps> = ({heading, content, ribon, backgroundImage, link}) => {
  return (
    <div className='text-center demo-effects mb-5'>
      <div className="web-item block my-7 mx-5 relative border-violet-200 rounded-md overflow-hidden">
        <div className={`layout-container shadow-md w-full bg-white rounded-md inline-flex bg-cover ease-out duration-200 bg-no-repeat`} style={{backgroundImage: `url('${backgroundImage}')`}}>
          {ribon &&(
            <div className="ribbon-1 h-20 bg-emerald-500 -top-1.5 left-3.5 relative mb-80 shadow-lime-600">
              <span className='first:mt-3 block text-white min-h-4 lowercase'>n</span>
              <span className='block text-white min-h-4 lowercase'>e</span>
              <span className='block text-white min-h-4 lowercase'>w</span>
            </div>
          )}
        </div>
        <div className="img-overlay absolute -bottom-24 inset-x-0 bg-white/90 text-center px-20 py-10 opacity-0 invisible text-base">
          <Link className='text-orange-500 cursor-pointer' to={link}>
            <h6><span className="text-primary">{heading}</span></h6>
          </Link>
          <p className='text-sm'>
            {content}...
          </p>
          <Link to={link}
            className="text-orange-500 bg-transparent border-orange-500 border py-1.5 px-4 inline-block"><FaLink></FaLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default portfolioCard
