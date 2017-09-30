import * as React from "react";

interface ITitleProps {
    text: string;
    width?: number;
}

export default class Title extends React.Component<ITitleProps, any> {

    public static defaultProps: Partial<ITitleProps> = {
        width: 200
    };

    public constructor(props: ITitleProps) {
        super(props);
    }

    public render() {
        return (
            <div className='framework-title-main' style={{ width: this.props.width }}>
                <div className='framework-title-block'>
                </div>
                <div className='framework-title-text'>
                    <span>{this.props.text.toUpperCase()}</span>
                </div>
            </div>
        );
    }

}