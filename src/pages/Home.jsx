import Categories from "../components/categories-section/Categories";
import Footer from "../components/footer/footer";
import Nav from "../components/header/Nav";
import HeroSection from "../components/hero-section/HeroSection";
import Offers from "../components/offers poster/Offers";
import Testimonials from "../testimonials/testimonials";

function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Categories />
      <Offers />
      <Testimonials />
    </>
  );
}
export default Home;
