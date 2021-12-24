import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav className="nav">
            <Link to="/">
                <h1 className="nav--titulo" >PhotoStore</h1>
            </Link>
            <Link to="/carrinho">
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </nav>
    )
}