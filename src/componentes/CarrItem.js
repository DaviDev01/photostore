import React, { useContext} from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
import {Link} from "react-router-dom"

function CarrItem({img}) {
    const {AdicionarAoCar} = useContext(Context)
    const [hovered, hoverRef] = useHover()
    const price = img.price

    return (
        <div className="carrItem-Cont">
            <i   
                onClick={() => AdicionarAoCar(img, true)}
                className={`${hovered ? 'fas' : 'far'} fa-trash-alt`}
                ref={hoverRef}  
            ></i>
            <Link to="/photostore/fotoinfo" state={{img: img}}>
                <img src={img.url} alt="" className="carrItem-Cont__img" onClick={() => window.scrollTo(0, 90)}/>
            </Link>
            <h3 className="carrItem-Cont__valor">{price.toLocaleString("pt-bt", {style: "currency", currency: "BRL"})}</h3>
        </div>
    )
}


CarrItem.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CarrItem