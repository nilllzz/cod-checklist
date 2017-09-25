import * as React from "react";
import { Link } from "react-router-dom";

interface IArrowBackProps {
    linkTo: string;
}

export default class ArrowBack extends React.Component<IArrowBackProps, any> {

    public render() {
        return (
            <Link to={this.props.linkTo}>
                <div className='framework-arrow'>
                </div>
            </Link>
        );
    }

}