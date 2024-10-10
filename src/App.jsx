import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Teachnalogies from "./Components/Teachnalogies";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume"; 
import NoPage from "./Components/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teachnalogies" element={<Teachnalogies/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}