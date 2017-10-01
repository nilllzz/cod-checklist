import * as React from "react";
import WW2Button from "../../ww2-button";
import PageHeader from "../../header";

export default class WeaponsPage extends React.Component<any, any> {

    private clickTempButton(href: string) {
        document.location.href = href;
    }

    public render() {
        return (
            <div className='weapons-main'>
                <PageHeader />

                <div className='weapons-title'>
                    <span>Call of Duty WW2 - Checklist</span>
                </div>
                <div className='weapons-temp-text'>
                    <span>
                        This page is still under construction.<br />
                        Please check back around the 3rd of November.
                    </span>
                </div>

                <WW2Button title={'Infinite Warfare'} onClick={() => this.clickTempButton('/iw/')} />
                <WW2Button title={'Homepage'} onClick={() => this.clickTempButton('/')} />
            </div>
        )
    }

}