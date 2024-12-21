import {useSignInDispatch, useSignInState } from "../../../exports";

const SignInOptions = () => {
      const { signInOption } = useSignInState();
      const dispatch = useSignInDispatch();
  return (
    <div className="relative h-[52px] md:h-[60px] text-[20px] font-medium">
    <div
      className={`absolute top-0 left-0 h-full w-1/2 bg-[#1570EF] rounded-md transition-transform duration-300 ease-in-out ${
        signInOption
          ? "transform translate-x-0"
          : "transform translate-x-full"
      }`}
    />
    {/* SASS BUTTON */}
    <button
      className={`${
        signInOption && "bg-[#1570EF] text-white border-0 relative"
      } border-2 h-full w-[50%] text-[#414651] rounded-md mr-[-5px] md:mr[-13px]`}
      onClick={() => dispatch({ type: "SASS" })}
    >
      SAAS
    </button>
    {/* SELF_HOSTED BUTTON */}
    <button
      className={`${
        !signInOption && "bg-[#1570EF] text-white border-0 relative"
      } text-[#414651]  border-2 rounded-md h-full w-[50%]`}
      onClick={() => dispatch({ type: "SELF_HOSTED" })}
    >
      Self Hosted
    </button>
  </div>
  )
}

export default SignInOptions
