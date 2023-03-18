import "./App.css";
import { Screen1 } from "./components/screen1/screen1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Screen2 } from "./components/screen2/screen2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
