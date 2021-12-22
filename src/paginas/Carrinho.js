import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CarrItem from "../componentes/CarrItem"

export default function Carrinho() {
    const [resevando, setResevando] = useState(false)
    const {carArr, esvaziarCarr} = useContext(Context)
    const CarItensEl = carArr.map(item => {
        return (
            <CarrItem img={item} key={item.id}/>
        )
    })
    
    function getTotal() {
        if (carArr.length === 0) {
            const num = 0
            return num.toLocaleString("en-US", {style: "currency", currency: "USD"})
        } else {
            const precosArray = []
            carArr.forEach(element => {
                precosArray.push(element.price)
            })
            const reducer = (prev, curr) => prev + curr
            return precosArray.reduce(reducer).toLocaleString("en-US", {style: "currency", currency: "USD"})
        }
    }

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
            <h3 className="CarrItemsCont__total">Total: {getTotal()}</h3>
            {carArr.length === 0 ? 
            <p>Carrinho Vazio</p> :
            <button onClick={reservarFotos} className="carrItemsCont__btn">{resevando ? 'Resevando...' : 'Reservar'}</button>}
        </main>
    )
}