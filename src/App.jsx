import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Footer from './components/Footer.jsx/Footer'
import SideBar from './components/sidebar/SideBar'
import MovieList from './components/movieList/MovieList'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">

          <SideBar />
          <MovieList />
        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
