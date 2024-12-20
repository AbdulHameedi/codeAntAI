import { createBrowserRouter } from "react-router-dom";
import { SignInPage } from "../exports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />
  },
]);
