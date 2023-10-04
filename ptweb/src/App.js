import './Styles/App.css';
import {Routes, Route} from "react-router"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import About from "./Pages/About";
function App() {
  return (

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>

  );
}

export default App;
