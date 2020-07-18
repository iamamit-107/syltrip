import React from "react";
import { Switch, Route } from "react-router-dom";
import { BASE_URL } from "./config";

import Home from "./MainPages/Home";
import Ride from "./MainPages/Ride";
import Trucker from "./MainPages/Trucker";
import Jhotpot from "./MainPages/Jhotpot";
import Ota from "./MainPages/Ota";

function App() {
    return (
        <>
            <Switch>
                <Route path={`${BASE_URL}/`} exact component={Home} />
                <Route path={`${BASE_URL}/ride`} exact component={Ride} />
                <Route path={`${BASE_URL}/trucker`} exact component={Trucker} />
                <Route
                    path={`${BASE_URL}/jhotpot-solution`}
                    exact
                    component={Jhotpot}
                />
                <Route
                    path={`${BASE_URL}/syltrips-ota`}
                    exact
                    component={Ota}
                />
            </Switch>
        </>
    );
}

export default App;
