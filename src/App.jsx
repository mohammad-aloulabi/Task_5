import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Packages from "./routes/Packages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upcomming Packages" element={<Packages />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
