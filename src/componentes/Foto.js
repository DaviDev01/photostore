import React, {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"


function Foto({img, className}) {
    const {favoritar, AdicionarAoCar, carArr} = useContext(Context)
    const [hovered, hoverRef] = useHover()

    const noCar = carArr.some( obj => obj.id === img.id)
    
    return (
        <div 
            className={`${className} Foto--cont`}
            ref={hoverRef}
        >   
           {(hovered || img.isFavorite) &&
            <i 
                className={`fa${img.isFavorite ? 's' : 'r'} fa-heart heart-hovered`} 
                onClick={() => favoritar(img.id)}
            ></i>}
           
           {(hovered || noCar)  &&  <i 
                className={`fas fa-${ noCar ? 'shopping-cart small' : 'cart-plus'} plus-cart-hovered`}
                onClick={() => {AdicionarAoCar(img, noCar)}}
           ></i>}    
           
            <img className="Foto--cont__img" src={img.url} alt=""/>
        </div>    
    )
}

Foto.propTypes  = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        id: PropTypes.string.isRequired
    })
}

export default Foto