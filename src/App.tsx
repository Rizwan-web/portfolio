import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes/AppRoutes";
import Header from "./components/header/Header";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
