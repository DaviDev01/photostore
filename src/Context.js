import React, {useEffect, useState} from "react"

const Context = React.createContext()
function ContextProvider(props) {
    const [fotosObj, setFotosObj] = useState(JSON.parse(localStorage.getItem("fotosObj")) || [])
    const [carArr, setCarArr] = useState(JSON.parse(localStorage.getItem("carArr")) || [])

    useEffect( () => {
        !fotosObj.length > 0 &&
        fetch("https://raw.githubusercontent.com/DaviDev01/scrimba-react-bootcamp-images/master/images.json")  
            .then(resp => resp.json())
            .then(data => setFotosObj(data))
            
    }, [] )

    useEffect( () => {
           localStorage.setItem("fotosObj", JSON.stringify(fotosObj)) 
    }, [fotosObj] )

    useEffect( () => {
        localStorage.setItem("carArr", JSON.stringify(carArr)) 
 }, [carArr] )


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

    return (
        <Context.Provider value={{fotosObj, favoritar, AdicionarAoCar, carArr, esvaziarCarr}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}