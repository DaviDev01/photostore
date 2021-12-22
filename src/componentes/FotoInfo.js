import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import Fotos from "../paginas/Fotos"
import {Context} from "../Context"

function FotoInfo() {
    const {AdicionarAoCar, carArr} = useContext(Context)
    const Location = useLocation()
    const {img} = Location.state
    const noCar = carArr.some( obj => obj.id === img.id)

    return (
        <div>
            <div className="FotoInfo">
                <img src={img.url} alt="" className="FotoInfo--img"/>
                <div className="info--sec-cont">
                    <div className="info--sec">
                        <p>Autor: {img.author}</p>
                        <p>Publicado em {img.postDate}</p>
                    </div>
                    <i 
                        className={`fas fa-${ noCar ? 'shopping-cart small' : 'cart-plus'} FotoInfo--car`}
                        onClick={() => {AdicionarAoCar(img, noCar)}}
                    ></i>
                </div>
            </div>
            <section id="fotos">
                <Fotos id={img.id}/>
            </section>
        </div>
    )
}

export default FotoInfo