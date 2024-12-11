import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import TopRated from "./components/TopRated"
import Footer from "./components/Footer"
import Popular from "./components/Popular"
import Upcoming from "./components/Upcoming"
import Movies from "./components/Movies"
import NoPage from "./components/NoPage";
import { Home } from "lucide-react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="topRated" element={<TopRated />} />
          <Route path="popular" element={<Popular />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="footer" element={<Footer />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}