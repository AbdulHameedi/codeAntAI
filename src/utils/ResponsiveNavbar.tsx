import { Logo, Hamburger, useDashboardDispatch } from "../exports";
const ResponsiveNavbar = () => {
  const dispatch = useDashboardDispatch();

  return (
    <div className="md:hidden flex justify-between items-center border-b-[1px] p-6 bg-white">
      <img src={Logo} alt="Logo" />
      <Hamburger onClick={()=>
        dispatch({type: "SHOW_NAV"})
      }/>
    </div>
  );
};

export default ResponsiveNavbar;
