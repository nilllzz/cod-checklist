import * as React from 'react';
import { render } from 'react-dom';

export default class HomeComponent extends React.Component {

    render() {
        return (
            <div>
                Hello World from React.
            </div>
        );
    }

}

render(
    <HomeComponent />,
    document.getElementById('container')
);