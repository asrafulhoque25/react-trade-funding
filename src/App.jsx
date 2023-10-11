import './app.css';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partners from './pages/Partners';
import Blog from './pages/Blog';

function App() {
  return (
  <div>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/partners" element={ <Partners /> }/>
        <Route path="/blog" element={ <Blog /> }/>
      </Routes>
    </BrowserRouter>
  </div>

  );
}
export default App;
