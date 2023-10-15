import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import Nav from "./components/header/Nav";
import Accessories from "./pages/Accessories";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menbags" element={<MenBags />} />
        <Route path="/womenbags" element={<WomenBags />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
      <Nav />
    </>
  );
}
export default App;
