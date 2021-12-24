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
                <Route exact path="/photostore" element={<Fotos />}/>
                <Route path="/photostore/carrinho" element={<Carrinho />}/>
                <Route path="/photostore/fotoinfo" element={<FotoInfo />}/>
            </Routes>
        </div>
    )
}