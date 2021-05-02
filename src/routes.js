import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
        </BrowserRouter>
    )
}

export default Routes;