import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App(){
  return (
    <><div className="section">
  <h1>Welcome to My Portfolio</h1>
  <p>React developer from Bengaluru building modern web apps.</p>
  <a href="/about" className="btn">Learn More</a>
</div>


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}