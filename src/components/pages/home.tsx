import * as React from "react";
import { Button } from "react-bootstrap";
import IWButton from "../iw_button";
import User from "../../user";
import IWLogo from "../iw_logo";
import { Link } from "react-router-dom";

export default class HomePage extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.onClick_Load = this.onClick_Load.bind(this);
        this.onClick_New = this.onClick_New.bind(this);
    }

    private onClick_Load() {
        User.load();
    }

    private onClick_New() {

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
                        <Link to='/weapons'>
                            <IWButton text='Load' onClick={this.onClick_Load} />
                        </Link>
                        <IWButton text='New' onClick={this.onClick_New} />
                    </div>
                </div>
            </div>
        )
    }

}