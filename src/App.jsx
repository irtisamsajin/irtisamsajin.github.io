import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Projects from "./routes/Projects";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App
