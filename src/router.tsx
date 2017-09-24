import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/home";

export default class PageRouter extends React.Component {

    public render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact>
                            <Route path='/' exact component={HomePage} />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}