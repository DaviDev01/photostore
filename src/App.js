import React from "react"
import Header from "./componentes/Header"
import Fotos from "./paginas/Fotos"
import Carrinho from "./paginas/Carrinho"
import {Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Fotos />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
            </Routes>
        </div>
    )
}