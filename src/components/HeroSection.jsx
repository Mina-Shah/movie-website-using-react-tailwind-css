const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-black">
      <img 
        src="src/assets/f.jpg" 
        className="absolute inset-0 w-full h-full object-cover opacity-35" 
        alt="Background" 
      />
      <div className="relative z-10 text-center">
        <h1 className="text-white text-xl md:text-4xl lg:text-6xl">
          Millions of movies. Explore now.
        </h1>
        <div className="mt-4 flex justify-center items-center ">
          <input 
            type="text" 
            className="w-60 bg-slate-50 mt-4 p-1 rounded-3xl md:w-80 md:p-2 lg:w-96 lg:p-3" 
            placeholder=" Search for Movies" 
          />
          <button className="bg-lime-500 w-20 -ml-14 mt-4 p-1 rounded-3xl md:p-2 lg:w-32 lg:p-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

