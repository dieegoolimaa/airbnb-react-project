import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />{" "}
            {/* Dashboard as default */}
            <Route path="/items/:itemId" element={<ItemDetailsPage />} />{" "}
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />{" "}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
