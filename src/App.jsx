import React from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/about" element={<About/>} />
        </Routes>
    
    </Router>
  );
}
export default App;