import { Sidebar } from "../../../exports";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-[#FAFAFA] flex">
      <Sidebar />
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
