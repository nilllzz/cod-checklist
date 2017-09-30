import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/home";
import WeaponsPage from "./components/pages/weapons/weapons";
import WeaponDetailPage from "./components/pages/weaponDetail/weaponDetail";
import WeaponClassPage from "./components/pages/weaponClass/weaponClass";
import WeaponFactsPage from "./components/pages/weaponFacts/weaponFacts";
import User from "./user";

export default class PageRouter extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        User.load();

        this.state = {
            loaded: User.isLoaded
        };

        this.onLoadedChanged = this.onLoadedChanged.bind(this);
    }

    onLoadedChanged(loaded: boolean): void {
        this.setState({
            loaded: loaded
        });
    }

    public render() {
        if (this.state.loaded) {
            return (
                <BrowserRouter basename='iw'>
                    <div>
                        <Switch>
                            <Route path='/'>
                                <Switch>
                                    <Route path='/' exact component={WeaponsPage} />
                                    <Route path='/:weaponclass' exact component={WeaponClassPage} />
                                    <Route path='/:weaponclass/:weapon' exact component={WeaponDetailPage} />
                                    <Route path='/:weaponclass/:weapon/details' exact component={WeaponFactsPage} />
                                </Switch>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            );
        }
        else {
            return (
                <HomePage onLoadedChanged={this.onLoadedChanged} />
            );
        }
    }

}