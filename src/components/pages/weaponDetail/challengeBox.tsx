import * as React from "react";
import Challenge from "../../../weapons/challenge";
import ProgressBar from "../../progress_bar";

interface IChallengeBoxProps {
    isActive: boolean;
    isBeaten: boolean;
    progress: number;
    camo: string;
    name: string;
    challenge?: Challenge;
    onClick: () => void;
}

export default class ChallengeBox extends React.Component<IChallengeBoxProps, any> {

    constructor(props: IChallengeBoxProps) {
        super(props);

        this.renderCamo = this.renderCamo.bind(this);
    }

    private renderCamo() {
        if (this.props.isActive) {
            if (this.props.isBeaten) {
                return (
                    <div className='challengebox-unlocked-camo'>
                        <img src={'resources/img/camos/' + this.props.camo + '.png'} />
                    </div>
                );
            }
            else {
                return (
                    <div className='challengebox-locked-camo'>
                        <img className='challengebox-blurred-camo' src={'resources/img/camos/' + this.props.camo + '.png'} />
                        <img src={'resources/img/ui/camo_locked.png'} className='challengebox-locked-camo-overlay' />
                    </div>
                );
            }
        }
        else {
            return (
                <div className='challengebox-hidden-camo'>
                    <img src={'resources/img/ui/camo_locked.png'} />
                </div>
            )
        }
    }

    public render() {
        return (
            <div className='challengebox-main'>
                <div className='challengebox-header'>
                    <div className='challengebox-header-coloredbox'>
                    </div>
                    <div className='challengebox-header-title'>
                        <span>{this.props.name.toUpperCase()}</span>
                    </div>
                </div>
                <div className='challengebox-camo' onClick={this.props.onClick}>
                    {this.renderCamo()}
                </div>
                <div className='challengebox-progress'>
                    <ProgressBar value={this.props.progress} height={20} />
                </div>
            </div>
        );
    }

}