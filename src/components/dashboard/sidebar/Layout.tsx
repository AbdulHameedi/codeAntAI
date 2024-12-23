import { ResponsiveNavbar, Sidebar } from "../../../exports";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-[#FAFAFA] md:flex">
      <Sidebar />
      <main className="overflow-y-auto md:px-6 flex-grow">
        <ResponsiveNavbar />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
