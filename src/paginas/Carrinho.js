import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CarrItem from "../componentes/CarrItem"

export default function Carrinho() {
    const [resevando, setResevando] = useState(false)
    const {carArr, esvaziarCarr} = useContext(Context)
    const ValorTotal = (carArr.length * 5.50).toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    const CarItensEl = carArr.map(item => {
        return (
            <CarrItem img={item} />
        )
    })

    function reservarFotos() {
        setResevando(true)
        setTimeout( () => {
            esvaziarCarr()
            setResevando(false)
        }, 1000 ) 
    }

    return (
        <main className="CarrItemsCont">
            {CarItensEl}
            <h3 className="CarrItemsCont__total">Total: {ValorTotal}</h3>
            {carArr.length === 0 ? 
            <p>Carrinho Vazio</p> :
            <button onClick={reservarFotos} className="carrItemsCont__btn">{resevando ? 'Resevando...' : 'Reservar'}</button>}
        </main>
    )
}