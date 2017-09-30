import * as React from "react";

interface IWW2ButtonProps {
    title: string;
    onClick: () => void;
}

export default class WW2Button extends React.Component<IWW2ButtonProps, any> {

    constructor(props: IWW2ButtonProps) {
        super(props);
    }

    public render() {
        return (
            <div className='framework-ww2-button' onClick={this.props.onClick}>
                <div className='framework-ww2-button-border' />
                <div className='framework-ww2-button-content'>
                    <span>{this.props.title.toUpperCase()}</span>
                </div>
            </div>
        )
    }

}