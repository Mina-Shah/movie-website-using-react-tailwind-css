import { Eye } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-14 bg-gradient-to-r from-lime-950 to-lime-500 flex justify-between items-center px-4">
      <div className="flex items-center space-x-2">
        <p className="font-bold text-2xl text-white md:ml-10 lg:ml-20 lg:text-3xl">Watch</p>
        <Eye className="text-white" />
      </div>
      
      <div className="text-xl md:mr-10 lg:text-2xl lg:mr-20 text-white">
        <a href="#" className="hover:text-lime-300 transition-colors duration-300">Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;
