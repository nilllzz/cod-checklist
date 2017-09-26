import * as React from "react";
import { Button } from "react-bootstrap";
import IWButton from "../iw_button";
import User from "../../user";
import IWLogo from "../iw_logo";
const saveAs = require('save-as').default;

interface IHomePageProps {
    onLoadedChanged: (loaded: boolean) => void;
}

interface IHomePageState {
    isNewConfirmOpen: boolean;
}

export default class HomePage extends React.Component<IHomePageProps, IHomePageState> {

    public constructor(props: IHomePageProps) {
        super(props);

        this.state = {
            isNewConfirmOpen: false
        };

        this.onClick_Load = this.onClick_Load.bind(this);
        this.onClick_Import = this.onClick_Import.bind(this);
        this.onClick_Export = this.onClick_Export.bind(this);
        this.onClick_New = this.onClick_New.bind(this);
        this.onClick_New_No = this.onClick_New_No.bind(this);
        this.onClick_New_Yes = this.onClick_New_Yes.bind(this);
    }

    public componentDidMount() {
        const filePicker = document.getElementById('file_picker') as HTMLInputElement;
        filePicker.onchange = e => this.loadFile(filePicker);
    }

    private loadFile(filePicker: HTMLInputElement) {
        const file = filePicker.files[0];
        if (!!file) {
            const reader = new FileReader();
            reader.onload = e => {
                const reader = e.target as FileReader;
                const contents = reader.result;
                console.log('data loaded from local file');
                User.restore();
                localStorage.setItem('data', contents);
                User.load();
                this.props.onLoadedChanged(User.isLoaded);
            };
            reader.readAsText(file);
        }
    }

    private onClick_Load() {
        User.restore();
        User.load();
        this.props.onLoadedChanged(User.isLoaded);
    }

    private onClick_Import() {
        const filePicker = document.getElementById('file_picker') as HTMLInputElement;
        filePicker.click();
    }

    private onClick_Export() {
        const data = localStorage.getItem('unloaded-data');
        if (!!data) {
            let blob = new Blob([data], { type: 'application/json;charset=utf-8' });
            saveAs(blob, 'data.json');
            console.log('data saved to local file');
        }
        else {
            console.log('no data found to export.');
        }
    }

    private onClick_New() {
        const data = localStorage.getItem('unloaded-data');
        if (!!data) {
            this.setState({
                isNewConfirmOpen: true
            });
        }
        else {
            this.onClick_New_Yes();
        }
    }

    private onClick_New_No() {
        this.setState({
            isNewConfirmOpen: false
        });
    }

    private onClick_New_Yes() {
        User.createNew();
        this.props.onLoadedChanged(User.isLoaded);
    }

    private renderOverlay() {
        if (this.state.isNewConfirmOpen) {
            return (
                <div className='homepage-overlay-main'>
                    <div className='homepage-overlay-content'>
                        <div className='homepage-overlay-title'>
                            <span>ERASE YOUR DATA?</span>
                        </div>
                        <div className='homepage-overlay-nv4'>
                            <img src='resources/img/ui/nv4_glitch.png' />
                        </div>
                        <div className='homepage-overlay-text'>
                            <span>
                                When selecting <b>New</b>, all your data for this browser will be erased.<br />
                                To preserve your current data, return to the previous menu and select <b>Export data</b>.<br />
                                <br />
                                <i>Do you really want to erase all your current data?</i>
                            </span>
                        </div>
                        <div className='homepage-overlay-options'>
                            <IWButton text='NO' onClick={this.onClick_New_No} />
                            <IWButton text='YES' onClick={this.onClick_New_Yes} />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    render() {
        return (
            <div className='homepage-main'>
                <input id='file_picker' type='file' style={{ visibility: 'hidden' }} />

                <IWLogo />

                <div className='homepage-content'>
                    <div className='homepage-content--up'>
                        <div className='homepage-content-text'>
                            <span>
                                Welcome to the <b>Call of Duty Infinite Warfare Checklist</b>.<br />
                                With this tool, you can keep track of your weapon unlock progress.<br />
                                <br />
                                If you have used this tool before, click the <b>Load button</b> to load your settings.<br />
                                To start with a blank slate, click the <b>New button</b>.<br />
                                Alternatively, you can use the <b>import/export</b> functionality to exchange data across browsers or computers.
                        </span>
                        </div>
                        <div className='homepage-content-options'>
                            {
                                localStorage.getItem('unloaded-data') ?
                                    <IWButton text='Load' onClick={this.onClick_Load} /> :
                                    <div></div>
                            }
                            <IWButton text='Import data' onClick={this.onClick_Import} />
                            {
                                localStorage.getItem('unloaded-data') ?
                                    <IWButton text='Export data' onClick={this.onClick_Export} /> :
                                    <div></div>
                            }
                            <IWButton text='New' onClick={this.onClick_New} />
                        </div>
                    </div>
                    <div className='homepage-content--down'>
                        <div className='homepage-content-disclaimer'>
                            <span>
                                Made by <a href='https://www.twitter.com/nilllzz' target='_blank'>nilllzz</a>.<br />
                                This site is not made by or affiliated with <a href='https://www.activision.com/' target='_blank'>Activision</a>, <a href='https://www.infinityward.com/' target='_blank'>Infinity Ward</a> or any other party owning parts of the Call of Duty franchise.<br />
                                Weapon images taken from the <a href='http://callofduty.wikia.com' target='_blank'>Call of Duty Fan Wiki</a>.<br />
                                Part of the art assets have been captured from screenshots of the game.
                            </span>
                        </div>
                    </div>
                </div>
                {this.renderOverlay()}
            </div>
        )
    }

}