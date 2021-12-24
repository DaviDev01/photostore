import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <nav className="nav">
            <Link to="/photostore">
                <h1 className="nav--titulo" >PhotoStore</h1>
            </Link>
            <Link to="/photostore/carrinho">
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </nav>
    )
}