import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import SearchBar from "./SearchBar"
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recepie</Link>
      </nav>
    </div>
  )
}

export default Navbar
