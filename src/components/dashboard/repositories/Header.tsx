import { AddRepo, RefreshAll, SearchBar, useDashboardState } from "../../../exports";

const Header = () => {
    const {repos} = useDashboardState()
  return (
    <header className="bg-white p-4 md:p-6 border-b-[1px]">
      <div className="md:flex justify-between items-center mb-4">
        <div className="mb-3 md:mb-0">
          <p className="text-2xl font-medium text-[#181D27]">Repositories</p>
          <p className="text-[14px] text-[#414651]">{repos.length} total repositories</p>
        </div>
        <div className="flex items-center gap-x-3 self-start">
            <img src={RefreshAll} alt="RefreshAll" />
            <img src={AddRepo} alt="AddRepo" />
        </div>
      </div>
      <SearchBar placeholder="Search Repositories" initialValue=""/>
    </header>
  );
};

export default Header;
