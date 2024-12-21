import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SignInProvider } from "./utils/SignInContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SignInProvider>
      <App />
    </SignInProvider>
  </StrictMode>
);
