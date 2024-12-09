import Navbar from "./components/Navbar"
import HeroSection from "./components/Home"
import TopRated from "./components/TopRated"
import Footer from "./components/Footer"
import Popular from "./components/Popular"
import Upcoming from "./components/Upcoming"
import Movies from "./components/Movies"

export default function App() {
  return (
   <>
   <Navbar />
   <HeroSection/>
   <Movies/>
   <TopRated/>
   <Popular/>
   <Upcoming/>
   <Footer/>
   </>
  )
}