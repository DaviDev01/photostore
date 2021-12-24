import React from "react"
import Header from "./componentes/Header"
import Fotos from "./paginas/Fotos"
import Carrinho from "./paginas/Carrinho"
import {Routes, Route} from "react-router-dom";
import FotoInfo from "./componentes/FotoInfo"

export default function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Fotos />}/>
                <Route path="/carrinho" element={<Carrinho />}/>
                <Route path="/fotoinfo" element={<FotoInfo />}/>
            </Routes>
        </div>
    )
}