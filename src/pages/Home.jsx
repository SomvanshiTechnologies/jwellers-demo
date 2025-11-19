import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedCollections from "../components/FeaturedCollections";
import NewArrivals from "../components/NewArrivals";
import BestSelling from "../components/BestSelling";
import FeaturedStoryBanner from "../components/FeaturedStoryBanner";
import PinterestGrid from "../components/PintrestGrid";
import CategoryShowcase from "../components/CategoryShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactNewsletter from "../components/ContactNewsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page bg-baige">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <NewArrivals />
      <BestSelling />
      <CategoryShowcase />
      <FeaturedStoryBanner />
      <PinterestGrid />
      <WhyChooseUs />
      <ContactNewsletter />
      <Footer />
    </div>
  );
}

export default Home;
