import { Link } from "react-router-dom";
import {
  Header,
  Sass,
  Sso,
  useSignInState,
  SignInFooter,
} from "../../../exports";
const Main = () => {
  const { signInOption } = useSignInState();

  return (
    <div className="bg-[#FAFAFA] w-full md:w-[50%] px-6 h-screen overflow-y-auto py-[150.83px]">
      <div className="flex justify-center items-center h-screen mb-8">
        <div className="bg-white w-full rounded-3xl border-[1px] h-[620px] ">
          <Header />
          <Link to={"/dashboard"}>
            <main className="flex flex-col items-center py-6 gap-4 px-3">
              {signInOption ? <Sass /> : <Sso />}
            </main>
          </Link>
        </div>
      </div>
      <SignInFooter />
    </div>
  );
};

export default Main;
