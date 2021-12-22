import React, {useContext} from "react"
import Foto from "../componentes/Foto"
import {Context} from "../Context"
import {getClass} from "../ferramentas/classe"

export default function Fotos(props) {
    const {fotosObj} = useContext(Context)

    const FotosEl = fotosObj.map( (obj, i) => {
                        return  obj.id !== props.id && 
                        <Foto key={obj.id} img={obj} className={getClass(i)}/>
                        
                    })

    return (
        <main className="Fotos">
            {FotosEl}
        </main>
    )
}