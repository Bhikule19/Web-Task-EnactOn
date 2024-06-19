import Logo from "../../assets/images/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const NavCollapsed = ({ toggleSidebar }) => {
  return (
    <div className="block" id="sidebar-collapsed">
      <div className="w-[150px] h-screen bg-[rgba(0,0,0,0.8)] p-8 flex flex-col items-center fixed top-0 left-0 z-50 gap-40 border-r-8 border-r-accent">
        <div className="cursor-pointer" id="hamburger" onClick={toggleSidebar}>
          <RxHamburgerMenu size={50}></RxHamburgerMenu>
        </div>
        <div className="logo -rotate-90 w-[447px]">
          <img src={Logo} alt="logo" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default NavCollapsed;
