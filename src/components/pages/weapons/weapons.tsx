import * as React from "react";
import IWLogo from "../../iw_logo";
import TotalCompletion from "./totalCompletion";
import WeaponClassSelection from "./weaponClassSelection";
import NextCompletion from "./nextCompletion";
import User from "../../../user";
import ChallengeBox from "../weaponDetail/challengeBox";
import Weapon from "../../../weapons/weapon";

export default class WeaponsPage extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.getSolarProgress = this.getSolarProgress.bind(this);
        this.getBlackSkyProgress = this.getBlackSkyProgress.bind(this);
    }

    private logout(): void {
        User.unload();
        location.reload();
    }

    public componentDidMount() {
        document.onkeyup = e => {
            if (e.keyCode == 27) { // escape
                document.onkeyup = undefined; // remove handler after it has been used
                const element = document.getElementById('framework-arrow-link');
                element.click();
            }
        }
    }

    private getSolarProgress(): number {
        const weapons = User.getWeapons();
        let progress = 0;
        let weaponCount = 0;

        for (let i = 0; i < weapons.length; i++) {
            const weapon = weapons[i];
            if (weapon.weaponClass !== Weapon.WeaponClass.Classic && weapon.diamondRequirement) {
                progress += weapon.getCompletion();
                weaponCount++;
            }
        }

        progress /= weaponCount;
        return progress;
    }

    private getBlackSkyProgress(): number {
        const weapons = User.getWeapons();
        let progress = 0;
        let weaponCount = 0;

        for (let i = 0; i < weapons.length; i++) {
            const weapon = weapons[i];
            if (weapon.diamondRequirement) {
                progress += weapon.getCompletion();
                weaponCount++;
            }
        }

        progress /= weaponCount;
        return progress;
    }

    public render() {
        const solarProgress = this.getSolarProgress();
        const blackSkyProgress = this.getBlackSkyProgress();

        return (
            <div className='weapons-main'>

                <div className='framework-arrow' id='framework-arrow-link'
                    onClick={this.logout} />
                <IWLogo />

                <div className='weapons-content'>

                    <div className='weapons-content-overallcompletion'>
                        <TotalCompletion text={'Your overall completion progress'} progress={User.getCompletion()} />
                    </div>

                    <div className='weapons-content-main'>
                        <div className='weapons-content-main--left'>
                            <WeaponClassSelection />
                            <div className='weapons-content-masterchallenges'>
                                <div className='weapons-class-selection-text'>
                                    <span>Master Challenge Progress</span>
                                </div>
                                <ChallengeBox key={'Solar'}
                                    camo={'solar'}
                                    isActive={true}
                                    isBeaten={solarProgress == 1}
                                    name={'Solar'}
                                    progress={solarProgress}
                                    onClick={() => { }} />
                                <ChallengeBox key={'BlackSky'}
                                    camo={'black_sky'}
                                    isActive={true}
                                    isBeaten={blackSkyProgress == 1}
                                    name={'Black Sky'}
                                    progress={blackSkyProgress}
                                    onClick={() => { }} />
                            </div>
                        </div>
                        <div className='weapons-content-main--right'>
                            <NextCompletion />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}