import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import NavCollapsed from "./NavCollapsed";
import Navbar from "./Navbar";
import NavExpanded from "./NavExpanded";

const Sidebar = () => {
  //Setting the breakpoint for small screen size
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      {isExpanded ? (
        <NavExpanded toggleSidebar={toggleSidebar} />
      ) : isMobile ? (
        <Navbar toggleSidebar={toggleSidebar} />
      ) : (
        <NavCollapsed toggleSidebar={toggleSidebar} />
      )}
    </div>
  );
};

export default Sidebar;
