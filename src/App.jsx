import { useState } from "react"
import "./App.scss"

import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import About from "./pages/About"
import Accueil from "./pages/Accueil"
import Logements from "./pages/Logements"
import PageErreur from "./pages/PageErreur"

/** Permet d'afficher les éléments de base de chaque pages et de définir les Url utilisés**/
function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/about" element={<About />} />
                <Route path="/location/:id" element={<Logements />} />
                <Route path="/PageErreur" element={<PageErreur />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
