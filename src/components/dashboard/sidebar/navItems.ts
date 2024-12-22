import {
  CloudSecurity,
  CodeReview,
  HowToUse,
  Repo,
  Settings,
} from "../../../exports";
export const NavItems = [
  { name: "Repositories", icon: Repo, path: "/dashboard/repositories" },
  {
    name: "AI Code Review",
    icon: CodeReview,
    path: "/dashboard/ai-code-review",
  },
  {
    name: "Cloud Security",
    icon: CloudSecurity,
    path: "/dashboard/cloud-security",
  },
  { name: "How to Use", icon: HowToUse, path: "/dashboard/how-to-use" },
  { name: "Settings", icon: Settings, path: "/dashboard/settings" },
];
