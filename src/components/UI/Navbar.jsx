import Logo from "../../assets/images/Logo.png";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[rgba(0,0,0,0.8)] p-4 flex items-center justify-between">
      <div className="cursor-pointer">
        <RxHamburgerMenu size={20} onClick={toggleSidebar} />
      </div>
      <div className="logo w-[100px] h-10">
        <img src={Logo} alt="logo" className="w-full h-full" />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
