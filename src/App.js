import React from "react";
import { Switch, Route } from "react-router-dom";
import { BASE_URL } from "./config";

import Home from "./MainPages/Home";
import Ride from "./MainPages/Ride";

function App() {
    return (
        <>
            <Switch>
                <Route path={`${BASE_URL}/`} exact component={Home} />
                <Route path={`${BASE_URL}/ride`} exact component={Ride} />
            </Switch>
        </>
    );
}

export default App;
