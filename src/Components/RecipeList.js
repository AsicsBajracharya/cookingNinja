import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./RecipeList.css"
function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>
  }
  return (
    <div className="recipe-list">
      {recipes.map((item, i) => {
        return (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.cookingTime} to make.</p>
            <div>{item.method.substring(0, 100)}...</div>
            <Link to={`recipe/${item.id}`}>Cook This</Link>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
