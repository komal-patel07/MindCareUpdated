import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./App.css"
createRoot(document.getElementById("root")).render(
  <StrictMode>
<App/>
  </StrictMode>
);
