import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <h1>Welcome to My App!</h1>
          <p>This is the home page content.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
