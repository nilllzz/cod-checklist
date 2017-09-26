import * as React from "react";
import { Link } from "react-router-dom";

interface IArrowBackProps {
    linkTo: string;
}

export default class ArrowBack extends React.Component<IArrowBackProps, any> {

    public componentDidMount() {
        document.onkeyup = e => {
            if (e.keyCode == 27) { // escape
                document.onkeyup = undefined; // remove handler after it has been used
                const element = document.getElementById('framework-arrow-link');
                element.click();
            } 
        }
    }

    public render() {
        return (
            <Link to={this.props.linkTo} id='framework-arrow-link'>
                <div className='framework-arrow'>
                </div>
            </Link>
        );
    }

}