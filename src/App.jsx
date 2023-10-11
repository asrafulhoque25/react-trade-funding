import './app.css';
<<<<<<< HEAD
import About from './pages/About';
import Home from './pages/Home';
import { createRoot } from "react-dom/client";
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
=======
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import Blogs from './components/blogs/Blogs';
import Brand from './components/brand/Brand';
import CommonFeature from './components/commonFeature/CommonFeature';
import CommonHeader from './components/commonHeader/CommonHeader';
import Footer from './components/footer/Footer';
import GrowSave from './components/growandsave/GrowSave';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <GrowSave />
      <CommonFeature SectionHeader={
        <CommonHeader
          SectionTitle='Dedicated support to help you achieve!'
          addClass={""}
          SectionIntro={"Have you ever taken a product and thought there was most likely a better solution for your business? It's easy to do when there are sooo many options!"}
        />
      } />
      <Testimonial />
      <Blogs SectionHeader={
        <CommonHeader
          SectionTitle='Let us help you take your business to the next level!'
          addClass={""}
        />
      } />
      <Brand />
      <Footer />
    </>
>>>>>>> c4794e8d1729f0d783f433e15e0b152849b82c05
  );
}
export default App;
