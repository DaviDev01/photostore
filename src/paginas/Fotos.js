import React, {useContext} from "react"
import Foto from "../componentes/Foto"
import {Context} from "../Context"
import {getClass} from "../ferramentas/classe"

export default function Fotos() {
    const {fotosObj} = useContext(Context)

    const FotosEl = fotosObj.map( (obj, i) => {
                        return (
                            <Foto key={obj.id} img={obj} className={getClass(i)}/>
                        )
                    })

    return (
        <main className="Fotos">
            {FotosEl}
        </main>
    )
}