import React, { useContext } from 'react';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import MovieList from './components/movieList/MovieList';
import Footer from './components/Footer.jsx/Footer';
import { ThemeContext } from './context';

const Page = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className={`h-full w-full ${darkMode ? 'dark' : ""}`}>
            <Header />
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <SideBar />
                    <MovieList />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;