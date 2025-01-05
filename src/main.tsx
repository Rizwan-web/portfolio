import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Button from "./components/Button/Button.tsx";
import reportWebVitals from "./reportWebVitals.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Button label="Submit" style="bg-blue-500 text-white border-none" />
  </StrictMode>
);

reportWebVitals();
