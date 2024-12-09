import { useState, useEffect } from "react"
function Search()  {

    const [search, setSearch] = useState([])

   const getSearch = ()=>{
    fetch("https://api.themoviedb.org/3/search/movie?api_key=df3244313a3638b528b22372584be50c&query=search")
     .then(response => response.json())
     .then(json => setSearch(json.results))
}

  useEffect(()=>{
      getSearch()
  }, [])

   console.log(search)


return (
    <>
    <section>
<h1 className="text-center mt-6 font-semibold text-lime-600 text-2xl md:text-4xl md:mt-8 lg:text-5xl lg:mt-20">
  Search
</h1>
<div className="">
    {search.map((search) => (
        <p
        className="text-white "
        >{search.title}</p>
    ))}
</div>
</section>
</>
)
}

export default Search