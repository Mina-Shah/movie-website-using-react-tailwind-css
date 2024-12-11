import { Eye } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="h-14 bg-gradient-to-r from-lime-950 to-lime-500 flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <p className="font-bold text-2xl text-white md:ml-20 lg:ml-20 lg:text-3xl">
            Watch
          </p>
          <Eye className="text-white" />
        </div>

        <div>
          <div className="lg:hidden ml-48 md:ml-96  ">
            <button onClick={toggleNavbar}>
            {menuOpen ? <X /> : <Menu size={28}/>}
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden fixed right-0 z-20 bg-zinc-900 w-full p-6 flex flex-col justify-center items-center ">
              <ul className=" space-y-2 text-white ">
                <li className=" hover:text-lime-400">
                  <Link to="/home">Home</Link>
                </li>
                <li className="hover:text-lime-400">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className=" hover:text-lime-400">
                  <Link to="/toprated">Top Rated</Link>
                </li>
                <li className=" hover:text-lime-400">
                  <Link to="/popular">Popular</Link>
                </li>
                <li className="hover:text-lime-400">
                  <Link to="/upcoming">Upcoming</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
     
       <div className=""> 
       <ul className="hidden lg:justify-center lg:items-center lg:flex lg:gap-9 lg:text-xl">
        <li className="lg:hover:underline">
          <Link to="/home" >Home</Link>
            </li>
        <li className="lg:hover:underline">
          <Link to="/movies" >Movies</Link>
            </li>
          <li className="lg:hover:underline">
            <Link to="/toprated">Top Rated</Link>
            </li>
            <li className="lg:hover:underline">
            <Link to="/popular">Popular</Link>
            </li>
            <li className="lg:hover:underline">
            <Link to="/upcoming">Upcoming</Link>
            </li>
        </ul>
       </div>

       <div className="hidden lg:flex lg:mr-10 items-center">
  <button className="text-lg text-white border-2 border-lime-300 rounded px-3 py-1 hover:text-lime-600 hover:bg-white transition-all duration-300">
    Sign In
  </button>
</div>

      
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
