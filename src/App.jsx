import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="w-full h-full">

      <Navbar />
      <Landing/>
      <Home/>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
