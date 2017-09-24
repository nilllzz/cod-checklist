import * as React from "react";
import ProgressBar from "../../progress_bar";

interface ITotalCompletionProps {
    text: string
    progress: number;
}

export default class TotalCompletion extends React.Component<ITotalCompletionProps, any> {

    constructor(props: ITotalCompletionProps) {
        super(props);
    }

    public render() {
        return (
            <div className='totalCompletion-main'>
                <div className='totalCompletion-title'>
                    <span>{this.props.text}</span>
                </div>
                <div className='totalCompletion-progress'>
                    <ProgressBar value={this.props.progress} />
                    <span className='totalCompletion-progress-text'>{(this.props.progress * 100).toFixed(2) + '%'}</span>
                </div>
            </div>
        )
    }

}