
import { homeFeatureData } from '../Data';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/banner/Banner';
import Blogs from '../components/blogs/Blogs';
import Brand from '../components/brand/Brand';
import CommonFeature from '../components/commonFeature/CommonFeature';
import CommonHeader from '../components/commonHeader/CommonHeader';
import Footer from '../components/footer/Footer';
import GrowSave from '../components/growandsave/GrowSave';
import Testimonial from '../components/testimonial/Testimonial';
const Home = () => {
  return (
    <div>
          <>
      <Navbar />
      <Banner />
      <GrowSave />
      <CommonFeature sectionCls = "featured-wrapper" featureData={homeFeatureData} SectionHeader={
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
    </div>
  )
}

export default Home