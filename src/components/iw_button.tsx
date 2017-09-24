import * as React from "react";

interface IIWButtonProps {

    text?: string;
    width?: number;
    onClick?: () => void;

}

export default class IWButton extends React.Component<IIWButtonProps, any> {

    public static defaultProps: Partial<IIWButtonProps> = {
        text: 'PLACEHOLDER',
        width: 200,
        onClick: () => {}
    };

    public constructor(props: IIWButtonProps) {
        super(props);
    }

    public render() {
        return (
            <div className='framework-button' 
                style={{ width: this.props.width }}
                onClick={this.props.onClick}>
                <span className='framework-button-text'>
                    {this.props.text}
                </span>
            </div>
        );
    }

}