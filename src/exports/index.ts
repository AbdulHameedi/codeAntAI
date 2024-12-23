// SVG EXPORTS
export {
  SignInImg,
  SignInBottom,
  Logo,
  SignInAzure,
  SignInGitHub,
  SignInBitBucket,
  SignInGitLab,
  Repo,
  CodeReview,
  CloudSecurity,
  HowToUse,
  Settings,
  RefreshAll,
  AddRepo,
  SearchButton,
  DropdownArrow,
  Logout,
  Support
} from "../assets/svg"

// SIGN IN EXPORTS
export { default as SignInOptions } from "../components/auth/sign-in/SignInOptions";
export { useSignInDispatch, useSignInState } from "../utils/SignInContext";
export { default as SignInPage } from "../components/auth/sign-in";
export {default as SignIn} from '../pages/auth/SignIn'
export { default as SignInFooter } from "../components/auth/sign-in/Footer";
export { default as Intro } from "../components/auth/sign-in/Intro";
export { default as Main } from "../components/auth/sign-in/Main";
export { default as Header } from "../components/auth/sign-in/Header";
export { default as Sass } from "../components/auth/sign-in/Sass";
export { default as Sso } from "../components/auth/sign-in/Sso";

// DASHBOARD EXPORTS
export { default as Sidebar } from "../components/dashboard/sidebar/Sidebar";
export { default as DashboardLayout } from "../components/dashboard/sidebar/Layout";
export { NavItems } from "../components/dashboard/sidebar/navItems";
export {useDashboardDispatch, useDashboardState} from '../utils/DashboardContext'
export {default as SearchBar} from '../components/dashboard/repositories/SearchBar'
export {default as Dropdown} from '../hooks/dropdown/Dropdown'
export {default as LogOutSidebar} from '../pages/auth/LogOut'

// ROUTES
export {default as Repositories} from '../pages/dashboard/Repositories'
export {default as AiCodeReview} from '../pages/dashboard/AiCodeReview'
export {default as CloudSecurityPage} from '../pages/dashboard/CloudSecurity'
export {default as HowToUsePage} from '../pages/dashboard/HowToUse'
export {default as SettingsPage} from '../pages/dashboard/Settings'
