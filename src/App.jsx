import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Movie from "./components/Movie";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Upcoming from "./components/Upcoming";
import SignIn from "./components/SignIn";
import NoPage from "./components/NoPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="search" element={<Search />} />
      <Route path="topRated" element={<TopRated />} />
      <Route path="popular" element={<Popular />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
