import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  NavItems,
  useDashboardState,
  useDashboardDispatch,
  Dropdown,
  LogOutSidebar,
  Cancel,
  Overlay,
} from "../../../exports";
import SupportSidebar from "./Support";

const Sidebar = () => {
  const { activeNavItem, isNavOpen } = useDashboardState();
  const dispatch = useDashboardDispatch();
  const [navItems] = useState(NavItems);

  return (
    <>
      {isNavOpen && <Overlay />}
      <div
        className={`bg-white border-r-2 md:h-screen h-fit md:w-[242px] w-full px-4 py-[27px] md:relative z-30 md:translate-x-0 fixed transform transition-transform duration-100 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <img src={Logo} alt="Logo" />
          <Cancel className="md:hidden" onClick={()=>
            dispatch({type: "HIDE_NAV"})
          }/>
        </div>
        <Dropdown
          options={["UtkarshDhairyaPa"]}
          initialValue="UtkarshDhairyaPa"
        />
        <div className="flex flex-col mb-3">
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
                    isActive
                      ? "md:bg-[#1570EF] md:text-white"
                      : "text-[#414651]"
                  } flex p-3.5 items-center font-medium text-md gap-x-2 text-[#414651] rounded-md`}
                  onClick={()=>
                    dispatch({type: "HIDE_NAV"})
                  }
                >
                  <navItem.icon
                    className={`${
                      isActive ? "md:text-white" : "text-[#414651]"
                    }`}
                  />
                  <p>{navItem.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-6 md:gap-y-4 md:absolute bottom-0 px-3.5 bottom-6">
          <div>
            <SupportSidebar />
          </div>
          <Link to="/signin">
            <LogOutSidebar />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
