import React, { useEffect, useState, useRef } from "react"
import "./Create.css"
import useFetch from "../../hooks/useFetch"
import { useHistory } from "react-router-dom"
function Create() {
  const [title, setTitle] = useState("")
  const [method, setMethod] = useState("")
  const [cookingTime, setCookingTime] = useState("")
  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef()
  const history = useHistory()

  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST")

  function handleSubmit(e) {
    e.preventDefault()
    console.log(title, method, cookingTime)
    postData({ title, ingredients, method, cookingTime: cookingTime + " minutes" })
  }
  function handleAdd(e) {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing])
    }
    setNewIngredient("")
    ingredientInput.current.focus()
  }
  //redirect user when we get data response
  useEffect(() => {
    if (data) {
      history.push("/")
    }
  }, [data])
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recepie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
        </label>
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput} />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>Current Ingredients:</p>
        {ingredients && ingredients.map((i) => <em key={i}>{i},</em>)}
        <label>
          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} />
        </label>
        <label>
          <span>Cooking time (minutes) </span>
          <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create
