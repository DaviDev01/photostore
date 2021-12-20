import { element } from "prop-types"
import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const hoverRef = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect( () => {
        const element = hoverRef.current
        element.addEventListener("mouseenter", enter)
        element.addEventListener("mouseleave", leave)
        return () => {
            element.removeEventListener("mouseenter", enter)
            element.removeEventListener("mouseleave", leave)    
        }
    }, [] )

    return [hovered, hoverRef]
}  

export default useHover