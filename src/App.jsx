import './app.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/banner/Banner';
import CommonFeature from './components/commonFeature/CommonFeature';
import CommonHeader from './components/commonHeader/CommonHeader';
import GrowSave from './components/growandsave/GrowSave';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <GrowSave />
<<<<<<< HEAD
      <Testimonial />
=======
      <CommonFeature SectionHeader={
        <CommonHeader
          SectionTitle='Dedicated support to help you achieve!'
          addClass={""}
          SectionIntro={"Have you ever taken a product and thought there was most likely a better solution for your business? It's easy to do when there are sooo many options!"}
        />
      } />
>>>>>>> bf33ef14930def0f0584f1a5b2dc4049d71ba80c
    </>
  );
}
export default App;
