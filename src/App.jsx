import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import Nav from "./components/header/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menbags" element={<MenBags />} />
        <Route path="/womenbags" element={<WomenBags />} />
      </Routes>
    </>
  );
}
export default App;
