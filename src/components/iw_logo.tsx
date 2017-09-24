import * as React from "react";

export default class IWLogo extends React.Component<any, any> {

    public render() {
        return (
            <div className='framework-iw-logo'>
                <img src='resources/img/ui/iw_logo.png' />
                <div className='framework-iw-logo-title'>
                    <span className='framework-iw-logo-title-cod'>Call of Duty</span>
                    <span className='framework-iw-logo-title-iw'> Infinite Warfare</span>
                </div>
            </div>
        );
    }

}