import { LangRepo, SpaceRepo, useDashboardState } from "../../../exports";

const MainRepo = () => {
    const { repos } = useDashboardState();
  return (
    <main>
      {repos.map((repo, index) => {
          const { title, visibility, language, size, lastUpdated } = repo;
        return(
        <div className={`p-4 md:p-6 bg-white border-b-[1px] ${index == 1 && "bg-[#F5F5F5]"}`} key={index}>
          <div className="flex gap-x-2 items-center mb-3">
            <p className="text-lg sm:text-xl text-[#181D27]">{title}</p>
            <p className="bg-[#EFF8FF] rounded-full text-center text-[#175CD3] text-sm border-[1px] border-[#B2DDFF] w-fit px-2">
              {visibility}
            </p>
          </div>
          <div className="flex items-center gap-x-4 sm:gap-x-10 text-base text-[#181D27]">
            <div className="flex items-center gap-x-14 sm:gap-x-20">
              <div className="relative">
                <p>{language}</p>
                <LangRepo className="absolute right-[-16px] top-2" />
              </div>
              <div className="relative">
                <p>{size}</p>
                <SpaceRepo className="absolute left-[-18px] top-[6px]" />
              </div>
            </div>
            <p>{lastUpdated}</p>
          </div>
        </div>
        )
})}
    </main>
  );
};

export default MainRepo;
