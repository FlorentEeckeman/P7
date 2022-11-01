import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Components/error/Error";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Card from "./Components/card/Card";
import json from "./main/Data.json";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(json);
  useEffect(() => {
    setData(json);
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/page/:id" element={<Card data={data} />} />
          <Route path="/" element={<Home data={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
