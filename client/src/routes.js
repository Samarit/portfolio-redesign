import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Works from "./pages/Works"

export const useRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/works" exact>
              <Works />
            </Route>
            <Route path="/contacts" exact>
              <Contacts />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}