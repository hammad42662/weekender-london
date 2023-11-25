import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import Accessories from "./pages/Accessories";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./components/header/Nav";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/footer/Footer.jsx";
function App() {
  return (
    <CartProvider>
      <div>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/menbags" element={<MenBags />} />
          <Route path="/womenbags" element={<WomenBags />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}
export default App;
