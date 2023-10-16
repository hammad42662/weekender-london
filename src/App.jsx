import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import Accessories from "./pages/Accessories";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menbags" element={<MenBags />} />
        <Route path="/womenbags" element={<WomenBags />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
