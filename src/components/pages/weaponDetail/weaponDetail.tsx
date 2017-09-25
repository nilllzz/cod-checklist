import * as React from "react";
import IWLogo from "../../iw_logo";
import Weapon from "../../../weapons/weapon";
import User from "../../../user";
import TotalCompletion from "../weapons/totalCompletion";
import ChallengeBox from "./challengeBox";
import ArrowBack from "../../arrowBack";
import { Link } from "react-router-dom";
import Challenge from "../../../weapons/challenge";

interface IWeaponDetailsPageState {
    selectedChallenge: Challenge;
    selectedChallengeValue: string;
}

export default class WeaponDetailPage extends React.Component<any, IWeaponDetailsPageState> {

    private weapon: Weapon;

    constructor(props: any) {
        super(props);

        const weaponName = this.props.match.params.weapon.toLowerCase();
        const weaponClass = this.props.match.params.weaponclass.toLowerCase();
        const weapons = User.getWeapons();
        let i = 0;
        while (i < weapons.length && !this.weapon) {
            var w = weapons[i];
            if (w.getLink() === '/' + weaponClass + '/' + weaponName) {
                this.weapon = w;
            }
            i++;
        }

        this.state = {
            selectedChallenge: undefined,
            selectedChallengeValue: ''
        };

        this.renderSelectedChallenge = this.renderSelectedChallenge.bind(this);
        this.selectChallenge = this.selectChallenge.bind(this);
        this.renderSelectedChallengeRequirements = this.renderSelectedChallengeRequirements.bind(this);
        this.onChange_selectedChallengeValue = this.onChange_selectedChallengeValue.bind(this);
    }

    private selectChallenge(challenge: Challenge): void {
        this.setState({
            selectedChallenge: challenge,
            selectedChallengeValue: challenge.getCurrentValue().toString()
        });
    }

    private onChange_selectedChallengeValue(): void {
        const element = document.getElementById('txt_selectedchallenge_value') as HTMLInputElement;
        let value = element.value;
        let isEmpty = false;
        if (value === '') {
            value = '0';
            isEmpty = true;
        }
        const num = parseInt(value);
        if (!isNaN(num)) {
            this.state.selectedChallenge.setCurrentValue(num);
            this.setState({
                selectedChallenge: this.state.selectedChallenge,
                selectedChallengeValue: isEmpty ? '' : this.state.selectedChallenge.getCurrentValue().toString()
            });
        }
    }

    private renderSelectedChallengeRequirements() {
        if (this.state.selectedChallenge.isActive()) {
            return (
                <div className='weapondetail-selectedchallenge-details-body'>
                    <div className='weapondetail-selectedchallenge-details-progress'>
                        <TotalCompletion text={this.state.selectedChallenge.getText()}
                            progress={this.state.selectedChallenge.getCompletion()} />
                    </div>
                    <div className='weapondetail-selectedchallenge-details-value'>
                        <input type='text'
                            id='txt_selectedchallenge_value'
                            value={this.state.selectedChallengeValue}
                            onChange={this.onChange_selectedChallengeValue} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='weapondetail-selectedchallenge-details-body'>
                    <div className='weapondetail-selectedchallenge-details-progress'>
                        <span>{'Available after ' + this.state.selectedChallenge.requiredChallenges[0].challengeName + ' is unlocked'}</span>
                    </div>
                </div>
            )
        }
    }

    private renderSelectedChallenge() {
        if (this.state.selectedChallenge !== undefined) {
            return (
                <div className='weapondetail-selectedchallenge'>
                    <div className='weapondetail-selectedchallenge-camo'>
                        {
                            this.state.selectedChallenge.isActive() ? 
                            <img src={'resources/img/camos/' + this.state.selectedChallenge.camoName + '.png'} /> : 
                            <img src={'resources/img/ui/camo_locked.png'} />
                        }
                    </div>
                    <div className='weapondetail-selectedchallenge-details'>
                        <div className='weapondetail-selectedchallenge-details-title'>
                            <span>{'Challenge Requirements'.toUpperCase()}</span>
                        </div>
                        {this.renderSelectedChallengeRequirements()}
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    public render() {
        let unlockedDiamond = true;
        let diamondProgress = 0;
        const weapons = User.getWeapons().filter(w =>
            w.weaponClass == this.weapon.weaponClass && w.diamondRequirement);
        for (let i = 0; i < weapons.length; i++) {
            const weapon = weapons[i];
            if (weapon.getCompletion() < 1) {
                unlockedDiamond = false;
            }
            else {
                diamondProgress++;
            }
        }
        diamondProgress /= weapons.length;

        return (
            <div className='weapondetail-main'>

                <ArrowBack linkTo={'/' + this.props.match.params.weaponclass} />
                <IWLogo />

                <div className='weapondetail-content'>
                    <div className='weapondetail-content--left'>
                        <div className='weapondetail-header'>
                            <div className='weapondetail-name'>
                                <span>{this.weapon.name}</span>
                            </div>
                            <div className='weapondetail-class'>
                                <span>{this.weapon.weaponClass}</span>
                            </div>
                        </div>
                        <div className='weapondetail-display'>
                            <div className='weapondetail-display-desc'>
                                <span>{this.weapon.description}</span>
                            </div>
                            <div className='weapondetail-display-img'>
                                <div className='weapondetail-display-img-container'>
                                    <Link to={this.weapon.getLink() + '/details'}>
                                        <img src={this.weapon.img} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {this.renderSelectedChallenge()}
                    </div>
                    <div className='weapondetail-content--right'>
                        <div className='weapondetail-challenges'>
                            {
                                this.weapon.challenges.map(c => {
                                    return (
                                        <ChallengeBox key={c.challengeName}
                                            camo={c.camoName}
                                            isActive={c.isActive()}
                                            isBeaten={c.isBeaten()}
                                            name={c.challengeName}
                                            progress={c.getCompletion()}
                                            challenge={c}
                                            onClick={() => this.selectChallenge(c)} />
                                    )
                                })
                            }
                            <ChallengeBox key={'Gold'}
                                camo={'gold'}
                                isActive={true}
                                isBeaten={this.weapon.getCompletion() == 1}
                                name={'Gold'}
                                progress={this.weapon.getCompletion()}
                                onClick={() => { }} />
                            <ChallengeBox key={'Diamond'}
                                camo={'diamond'}
                                isActive={true}
                                isBeaten={unlockedDiamond && this.weapon.getCompletion() == 1}
                                name={'Diamond'}
                                progress={diamondProgress}
                                onClick={() => { }} />
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}