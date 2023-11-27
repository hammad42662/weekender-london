import Categories from "../components/categories-section/Categories";
import HeroSection from "../components/hero-section/HeroSection";

import Offers from "../components/offers poster/Offers";
import Testimonials from "../components/testimonials/Testimonials";

function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Offers />
      <Testimonials />
    </>
  );
}
export default Home;
