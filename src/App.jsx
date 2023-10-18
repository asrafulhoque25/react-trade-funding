import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from './pages/About';
import Blog from './pages/Blog';
import BusinessCard from "./pages/BusinessCard";
import BusinessLoans from "./pages/BusinessLoans";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Payments from "./pages/Payments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/businessloans" element={<BusinessLoans />} />
          <Route path="/businesscard" element={<BusinessCard />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}
export default App;
