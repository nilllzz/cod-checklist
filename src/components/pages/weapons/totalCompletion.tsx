import * as React from "react";
import User from "../../../user";
import ProgressBar from "../../progress_bar";

export default class TotalCompletion extends React.Component<any, any> {

    public render() {
        const progress = User.getCompletion();

        return (
            <div className='totalCompletion-main'>
                <div className='totalCompletion-title'>
                    <span>
                        Your overall completion progress:
                    </span>
                </div>
                <div className='totalCompletion-progress'>
                    <ProgressBar width={400} value={progress} />
                    <span className='totalCompletion-progress-text'>{(progress * 100).toFixed(2) + '%'}</span>
                </div>
            </div>
        )
    }

}