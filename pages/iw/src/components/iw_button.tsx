import * as React from "react";

interface IIWButtonProps {

    text?: string;
    width?: number;
    onClick?: () => void;
    disabled?: boolean;

}

export default class IWButton extends React.Component<IIWButtonProps, any> {

    public static defaultProps: Partial<IIWButtonProps> = {
        text: 'PLACEHOLDER',
        width: 200,
        onClick: () => {},
        disabled: false
    };

    public constructor(props: IIWButtonProps) {
        super(props);

        this.getClassName = this.getClassName.bind(this);
    }

    private getClassName() {
        return 'framework-button' + (this.props.disabled ? '-disabled' : '-enabled');
    }

    public render() {
        return (
            <div className={'framework-button ' + this.getClassName()}
                style={{ width: this.props.width }}
                onClick={this.props.onClick}>
                <span className={'framework-button-text'}>
                    {this.props.text}
                </span>
            </div>
        );
    }

}