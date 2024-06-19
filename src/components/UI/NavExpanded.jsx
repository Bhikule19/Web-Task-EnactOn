import { IoClose } from "react-icons/io5";

import Logo from "../../assets/images/Logo.png";
import NavLinks from "../NavLinks";

const NavExpanded = ({ toggleSidebar }) => {
  return (
    <div className="block" id="sidebar-expanded">
      <div className="w-[345px] h-screen bg-[rgba(0,0,0,0.8)] p-8 flex flex-col items-start justify-between fixed top-0 left-0 z-50">
        <div>
          <div className="cursor-pointer" id="close" onClick={toggleSidebar}>
            <IoClose size={50} />
          </div>
          <div className="logo max-w-[250px] ">
            <img src={Logo} />
          </div>
        </div>
        <NavLinks />
        <div>
          <div className="text-sm mt-4">
            <a
              href="tel:070-7782-9137"
              className="py-2 text-white hover:text-accent uppercase mr-2"
            >
              Text Support 24/7
            </a>
            <a className="border-b-2 border-b-accent text-accent">
              070-7782-9137
            </a>
          </div>
          <div className="flex items-center justify-between space-x-4 mt-2 text-[22px]">
            <a href="#" className="py-2 text-white hover:text-accent uppercase">
              <i className="fas fa-shopping-cart mr-2"></i> Cart
            </a>
            <a href="#" className="py-2 text-white hover:text-accent uppercase">
              <i className="fas fa-heart mr-2"></i> Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavExpanded;
