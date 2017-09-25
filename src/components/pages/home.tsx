import * as React from "react";
import { Button } from "react-bootstrap";
import IWButton from "../iw_button";
import User from "../../user";
import IWLogo from "../iw_logo";

interface IHomePageProps {
    onLoadedChanged: (loaded: boolean) => void;
}

export default class HomePage extends React.Component<IHomePageProps, any> {

    public constructor(props: IHomePageProps) {
        super(props);

        this.onClick_Load = this.onClick_Load.bind(this);
        this.onClick_New = this.onClick_New.bind(this);
    }

    private onClick_Load() {
        console.log('clicked on load');
        User.load();
        console.log('loaded user with result', User.isLoaded);
        this.props.onLoadedChanged(User.isLoaded);
    }

    private onClick_New() {
        User.createNew();
        this.props.onLoadedChanged(User.isLoaded);
    }

    render() {
        return (
            <div className='homepage-main'>

                <IWLogo />

                <div className='homepage-content'>
                    <div className='homepage-content-text'>
                        <span>
                            Welcome to the <b>Call of Duty Infinite Warfare Checklist</b>.<br />
                            With this tool, you can keep track of your weapon unlock progress.<br />
                            <br />
                            If you have used this tool before, click the Load button to load your settings.<br />
                            To start with a blank slate, click the New button.
                        </span>
                    </div>
                    <div className='homepage-content-options'>
                        <IWButton text='Load' onClick={this.onClick_Load} />
                        <IWButton text='New' onClick={this.onClick_New} />
                    </div>
                </div>
            </div>
        )
    }

}