import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.scss"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Story from "./pages/story/Story";
import Dev from "./pages/dev/Dev";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="about" element={<About />} />
          <Route path="developer" element={<Dev />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
