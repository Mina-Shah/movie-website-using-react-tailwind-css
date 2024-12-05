
const TrendingNow = () => {
  const trendingItems = [
    {
      id: "1",
    },
    {
      id:"2"
    },
    {
      id: "3",
    },  {
      id: "4",
    },  {
      id: "5",
    },  {
      id: "6",
    },
  ]

  return (
    <section>
      <h1 className="text-center mt-6 font-semibold text-lime-600 text-2xl md:text-4xl md:mt-8 lg:text-5xl lg:mt-20">
        Trending Now
      </h1>
      <div className="grid grid-cols-1 gap-6 mx-20 my-8 md:grid-cols-3 lg:grid-cols-4 lg:mr-20 lg:mt-14 md:mx-20">
        {trendingItems.map((item) => (
          <div
            key={item.id}
            className="w-full h-60 border border-white flex items-center justify-center"
          >
          </div>
        ))}
      </div>
    </section>
  );

};

export default TrendingNow;
