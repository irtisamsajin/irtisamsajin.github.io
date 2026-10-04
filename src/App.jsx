import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Blogs from "./routes/Blogs";
import BlogPost from "./routes/BlogPost";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  )
}

export default App
