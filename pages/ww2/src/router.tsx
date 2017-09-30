import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WeaponsPage from "./components/pages/weapons/weapons";

export default class PageRouter extends React.Component<any, any> {

    public render() {
        return (
            <BrowserRouter basename='ww2'>
                <div>
                    <Switch>
                        <Route path='/'>
                            <Switch>
                                <Route path='/' exact component={WeaponsPage} />
                            </Switch>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}