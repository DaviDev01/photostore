import React, { useContext} from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function CarrItem({img}) {
    const {AdicionarAoCar} = useContext(Context)
    const [hovered, hoverRef] = useHover()

    return (
        <div className="carrItem-Cont">
            <i   
                onClick={() => AdicionarAoCar(img, true)}
                className={`${hovered ? 'fas' : 'far'} fa-trash-alt`}
                ref={hoverRef}  
            ></i>
            <img src={img.url} alt=""/>
            <h3 className="carrItem-Cont__valor">$5.50</h3>
        </div>
    )
}


CarrItem.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CarrItem