import "./App.css";
import Main from "./screens/Main/Main";
import Letter from "./screens/Letter/Letter";
import Layout from "./components/Layout/Layout";
import About from "./screens/About/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [dayMode, setDayMode] = useState(true);

  // useEffect(() => {
  //   const dayModeOn = async () => {
  //    const modeChange = await
  //  }

  // first;

  // return () => {
  //   second;
  //   // };
  // }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Main />}></Route>
        </Routes>
        <Routes>
          <Route path="/letter" exact element={<Letter />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" exact element={<About />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
