import * as React from "react";

interface IProgressBarProps {

    value: number;
    width?: number;

}

export default class ProgressBar extends React.Component<IProgressBarProps, any> {

    public static defaultProps: Partial<IProgressBarProps> = {
        width: 200
    };

    public render() {
        return (
            <div className='framework-progressbar-main' style={{ width: this.props.width }}>
                <div className='framework-progressbar-bar' style={{ width: (this.props.width - 6) * this.props.value }}>
                </div>
            </div>
        );
    }

}