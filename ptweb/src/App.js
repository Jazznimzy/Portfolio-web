import './Styles/App.css';
import {Routes, Route} from "react-router"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
function App() {
  return (

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
      </Routes>

  );
}

export default App;
