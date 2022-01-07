import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Create from "./pages/create/Create"
import Search from "./pages/search/Search"
import Recepie from "./pages/recepie/Recepie"
import Navbar from "./Components/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recepie">
            <Recepie />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
