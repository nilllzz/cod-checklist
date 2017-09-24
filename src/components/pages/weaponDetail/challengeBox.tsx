import * as React from "react";
import Challenge from "../../../weapons/challenge";
import ProgressBar from "../../progress_bar";

interface IChallengeBoxProps {
    challenge: Challenge;
}

export default class ChallengeBox extends React.Component<IChallengeBoxProps, any> {

    constructor(props: IChallengeBoxProps) {
        super(props);

        this.renderCamo = this.renderCamo.bind(this);
    }

    private renderCamo() {
        if (!this.props.challenge.isActive()) {
            return (
                <img src={'resources/img/ui/camo_locked.png'} />
            )
        }
        else {
            return (
                <img src={'resources/img/camos/' + this.props.challenge.camoName + '.png'} />
            );
        }
    }

    public render() {
        return (
            <div className='challengebox-main'>
                <div className='challengebox-header'>
                    <div className='challengebox-header-coloredbox'>
                    </div>
                    <div className='challengebox-header-title'>
                        <span>{this.props.challenge.challengeName.toUpperCase()}</span>
                    </div>
                </div>
                <div className='challgenbox-camo'>
                    {this.renderCamo()}
                </div>
                <div className='challengebox-progress'>
                    <ProgressBar value={this.props.challenge.getCompletion()} height={20} />
                </div>
            </div>
        );
    }

}