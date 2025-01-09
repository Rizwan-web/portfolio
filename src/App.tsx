import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes/AppRoutes";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
