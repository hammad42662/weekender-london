import Categories from "../components/categories-section/categories";
import Footer from "../components/footer/footer";
import Nav from "../components/header/Nav";
import HeroSection from "../components/hero-section/hero-section";
import Offers from "../offers poster/offers";
import Testimonials from "../testimonials/testimonials";

function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Categories />
      <Offers />
      <Testimonials />
      <Footer />
    </>
  );
}
export default Home;
