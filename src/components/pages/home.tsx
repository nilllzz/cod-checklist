import * as React from "react";
import { Button } from "react-bootstrap";
import IWButton from "../iw_button";

export default class HomePage extends React.Component<any, any> {

    render() {
        return (
            <div className='homepage-main'>
                <div className='homepage-iw'>
                    <img src='resources/img/ui/iw_logo.png' />
                    <div className='homepage-iw-title'>
                        <span className='homepage-iw-title-cod'>Call of Duty</span>
                        <span className='homepage-iw-title-iw'> Infinite Warfare</span>
                    </div>
                </div>

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
                        <IWButton text='Load' />
                        <IWButton text='New' />
                    </div>
                </div>
            </div>
        )
    }

}