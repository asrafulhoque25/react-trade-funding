import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners';

function App() {
  return (
  <div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/partners" element={ <Partners /> }/>
        <Route path="/blog" element={ <Blog /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </BrowserRouter>
  </div>

  );
}
export default App;
