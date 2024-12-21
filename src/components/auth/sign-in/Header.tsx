import { Logo, SignInOptions } from "../../../exports";

const Header = () => {
  return (
    <header className="pt-[39.5px] px-4 md:px-6 pb-9 border-b-[1px] h-[276px">
      <img src={Logo} alt="Logo" className="mb-9 mx-auto" />
      <h1 className="text-[24px] md:text-[32px] font-medium text-center mb-5">
        Welcome to CodeAnt AI
      </h1>
      <SignInOptions />
    </header>
  );
};

export default Header;
