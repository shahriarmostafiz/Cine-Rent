import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer.jsx/Footer'
import SideBar from './components/sidebar/SideBar'
import MovieList from './components/movieList/MovieList'
import { CartContext, ThemeContext } from './context'
import Page from './Page'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const value = { cartItems, setCartItems }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <CartContext.Provider value={value}>

        <Page />
      </CartContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
