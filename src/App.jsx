import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MenBags from "./pages/MenBags";
import WomenBags from "./pages/WomenBags";
import Accessories from "./pages/Accessories";
import PageNotFound from "./pages/PageNotFound";
import Nav from "./components/header/Nav";
import Footer from "./footer/Footer";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="/menbags" element={<MenBags />} />
      <Route path="/womenbags" element={<WomenBags />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}
export default App;
