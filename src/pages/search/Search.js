import React, { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import "./Search.css"
import useFetch from "../../hooks/useFetch"
import RecipeList from "../../Components/RecipeList"
function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")
  console.log("query", query)
  const url = "http://localhost:3000/recipes?q=" + query
  const { error, isPending, data } = useFetch(url)
  return (
    <>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <RecipeList recipes={data} />}
    </>
  )
}

export default Search
