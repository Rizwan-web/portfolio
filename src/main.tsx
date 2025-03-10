import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
