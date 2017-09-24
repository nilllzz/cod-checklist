import * as React from "react";

interface IProgressBarProps {
    value: number;
    height?: number;
}

export default class ProgressBar extends React.Component<IProgressBarProps, any> {

    public static defaultProps: Partial<IProgressBarProps> = {
        height: 28
    };

    public render() {
        return (
            <div className='framework-progressbar-main' style={{ height: this.props.height }}>
                <div className='framework-progressbar-bar' style={{ width: (this.props.value * 100).toString() + '%' }}>
                </div>
            </div>
        );
    }

}