import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import PrimaryNav from "./components/header/PrimaryNav";
import SecondaryNav from "./components/header/SecondaryNav";

function App() {
  return (
    <>
      <PrimaryNav />
      <SecondaryNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menbags" element={<MenBags />} />
        <Route path="/womenbags" element={<WomenBags />} />
      </Routes>
    </>
  );
}
export default App;
