import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import About from "./screen/About";
import Home from "./screen/Home";
import Project from "./screen/Project";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;