import {BrowserRouter, Switch, Route} from "react-router-dom"
import React from 'react'
import Yukimi from "./Yukimi"
import "./App.scss"

const AppRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <Yukimi />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
