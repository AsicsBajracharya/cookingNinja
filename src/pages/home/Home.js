import React, { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import "./Home.css"
function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading....</p>}
      {data &&
        data.map((item, i) => {
          return <h2 key={item.id}>{item.title}</h2>
        })}
    </div>
  )
}

export default Home
