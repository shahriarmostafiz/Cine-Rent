import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer.jsx/Footer'
import SideBar from './components/sidebar/SideBar'
import MovieList from './components/movieList/MovieList'
import { CartContext } from './context'

function App() {
  const [cartItems, setCartItems] = useState([])
  const value = { cartItems, setCartItems }

  return (
    <CartContext.Provider value={value}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

          <SideBar />
          <MovieList />
        </div>

      </main>
      <Footer />
    </CartContext.Provider>
  )
}

export default App
