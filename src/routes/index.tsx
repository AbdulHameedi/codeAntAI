import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  SignIn,
  DashboardLayout,
  Repositories,
  AiCodeReview,
  CloudSecurityPage,
  SettingsPage,
  HowToUsePage,
  // ErrorPage
} from "../exports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard/repositories" />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="repositories" />,
      },
      {
        path: "repositories",
        element: <Repositories />,
      },
      {
        path: "ai-code-review",
        element: <AiCodeReview />,
      },
      {
        path: "cloud-security",
        element: <CloudSecurityPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "how-to-use",
        element: <HowToUsePage />,
      },
    ],
  },
]);
