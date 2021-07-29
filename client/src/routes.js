import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./pages/Home"

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}