import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import Des from "./components/destination/Des.js";
import Moon from "./components/destination/Moon.js";
import Crew from "./components/crew/Crew1.js";
import Tech from "./components/technology/Tech1.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/des" element={<Des />} />
        <Route path="/des/1" element={<Moon />} />
        <Route path="/crew/1" element={<Crew />} />
        <Route path="/tech/1" element={<Tech />} />
      </Routes>
    </Router>
  );
}

export default App;
