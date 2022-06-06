import "./App.css";
import Main from "./screens/Main/Main";
import Letter from "./screens/Letter/Letter";
import Layout from "./components/Layout/Layout";
import About from "./screens/About/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [dayMode, setDayMode] = useState(false);

  return (
    <div className="App">
      <Layout dayMode={dayMode} setDayMode={setDayMode}>
        <Routes>
          <Route path="/letter/:letter_id" element={<Letter />} />
          <Route path="/" exact element={<Main dayMode={dayMode} />} />
          <Route path="/about" exact element={<About dayMode={dayMode} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
