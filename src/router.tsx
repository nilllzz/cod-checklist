import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home";
import WeaponsPage from "./components/pages/weapons/weapons";
import WeaponDetailPage from "./components/pages/weaponDetail/weaponDetail";

export default class PageRouter extends React.Component {

    public render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact>
                            <Route path='/' exact component={HomePage} />
                        </Route>
                        <Route path='/weapons'>
                            <Switch>
                                <Route path='/weapons' exact component={WeaponsPage} />
                                <Route path='/weapons/:weaponclass/:weapon' exact component={WeaponDetailPage} />
                            </Switch>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}