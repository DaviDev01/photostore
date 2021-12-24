import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import './index.css'
import {HashRouter} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(
    <ContextProvider>
        <HashRouter>
            <App />
        </HashRouter> 
    </ContextProvider>,
document.getElementById("root"))