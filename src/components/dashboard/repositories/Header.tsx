import { AddRepo, RefreshAll, SearchBar } from "../../../exports";

const Header = () => {
  return (
    <header className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-2xl font-medium text-[#181D27]">Repositories</p>
          <p className="text-[14px] text-[#414651]">33 total repositories</p>
        </div>
        <div className="flex items-center gap-x-3 self-start">
            <img src={RefreshAll} alt="RefreshAll" />
            <img src={AddRepo} alt="AddRepo" />
        </div>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
