import {
  SignInAzure,
  SignInBitBucket,
  SignInGitHub,
  SignInGitLab,
} from "../../../exports";

const Sass = () => {
  return (
    <>
      <img src={SignInGitHub} alt="SignInGitHub" />
      <img src={SignInBitBucket} alt="SignInBitBucket" />
      <img src={SignInAzure} alt="SignInAzure" />
      <img src={SignInGitLab} alt="SignInGitLab" />
    </>
  );
};

export default Sass;
