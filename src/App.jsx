import './app.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import GrowSave from './components/growandsave/GrowSave';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <GrowSave />
      <Testimonial />
    </>
  );
}
export default App;
