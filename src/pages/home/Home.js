import React, { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import "./Home.css"
import RecipeList from "../../Components/RecipeList"
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home
