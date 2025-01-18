interface ImageInterfaceProps {
  path: string;
  alternative: string;
}

const Image: React.FC<ImageInterfaceProps> = ({ path, alternative }) => {
  return <img src={path} alt={alternative} />;
};

export default Image;
