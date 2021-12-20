import React, {useEffect, useState} from "react"

const Context = React.createContext()
function ContextProvider(props) {
    const [fotosObj, setFotosObj] = useState([])
    const [carArr, setCarArr] = useState([])

    useEffect( () => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")    
            .then(resp => resp.json())
            .then(data => setFotosObj(data))
            
    }, [] )

    function favoritar(id) {
        setFotosObj( prev => prev.map(obj => obj.id === id ? {...obj, isFavorite: !obj.isFavorite} : obj))
    }

    function AdicionarAoCar(imgObj, noCar) {
        !noCar ?
        setCarArr(prev => [...prev, imgObj]) :
        setCarArr(prev => prev.filter(obj => obj.id !== imgObj.id))
    }

    function esvaziarCarr() {
        setCarArr([])
    }

    console.log(carArr)
    return (
        <Context.Provider value={{fotosObj, favoritar, AdicionarAoCar, carArr, esvaziarCarr}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}