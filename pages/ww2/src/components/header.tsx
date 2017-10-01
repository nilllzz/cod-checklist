import * as React from "react";
import { Glyphicon } from "react-bootstrap";

export default class PageHeader extends React.Component<any, any> {

    private toggleFire() {
        const current = localStorage.getItem('ww2-config-fire');
        let newValue = false;
        if (current !== null) {
            newValue = !JSON.parse(current);
        }
        localStorage.setItem('ww2-config-fire', JSON.stringify(newValue));
        location.reload();
    }

    public render() {
        return (
            <div className='header-main'>
                <img src='resources/img/ui/logo.png' />
                <div className='header-fire-toggle' onClick={this.toggleFire}>
                    <Glyphicon glyph='fire' />
                </div>
            </div>
        );
    }

}