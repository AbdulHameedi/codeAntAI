import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  NavItems,
  useDashboardState,
  useDashboardDispatch,
  Dropdown,
  LogOutSidebar,
} from "../../../exports";
import SupportSidebar from "./Support";

const Sidebar = () => {
  const { activeNavItem } = useDashboardState();
  const dispatch = useDashboardDispatch();
  const [navItems] = useState(NavItems);

  return (
    <div className="bg-white border-r-2 h-screen w-[242px] px-4 py-[27px] relative">
      <img src={Logo} alt="Logo" className="mb-5" />
      <Dropdown options={["UtkarshDhairyaPa"]} initialValue="UtkarshDhairyaPa"/>
      <div className="flex flex-col">
        {navItems.map((navItem, index) => {
          const isActive = activeNavItem === navItem.path;
          return (
            <Link
              to={navItem.path}
              key={index}
              onClick={() =>
                dispatch({ type: "SET_ACTIVE_NAV", payload: navItem.path })
              }
            >
              <div
                className={`${
                  isActive ? "bg-[#1570EF] text-white" : "text-[#414651]"
                } flex p-3.5 items-center font-medium text-md gap-x-2 text-[#414651] rounded-md`}
              >
                <navItem.icon
                  className={`${isActive ? "text-white" : "text-[#414651]"}`}
                />
                <p>{navItem.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-4 absolute bottom-0 px-3.5 bottom-6">
        <SupportSidebar/>
        <Link to="/signin">
          <LogOutSidebar />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
