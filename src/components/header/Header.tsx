import HeaderRight from "./HeaderRight";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
