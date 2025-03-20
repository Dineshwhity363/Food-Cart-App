import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { MenuCard } from "./Components/MenuCard"
import { ViewCart } from "./Components/ViewCart"
import './App.css'
import { createContext, useState } from "react"

export const GreantContext=createContext()

function App() {
 const [cart,setCart]=useState([])

  return (
    <>
    <GreantContext.Provider value={[cart,setCart]}>
    <BrowserRouter>
    <Header/>
    <div className="container">
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/menu-card" element={<MenuCard/>}/>
        <Route exact path="/view cart" element={<ViewCart/>}/>
        </Routes>
        </div>
        </BrowserRouter>
        </GreantContext.Provider>

    </>
  )
}

export default App
