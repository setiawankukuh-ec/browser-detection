import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// import "core-js/stable";
// import "./pollyfiils.ts";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
