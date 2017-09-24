import * as React from "react";
import IWLogo from "../../iw_logo";
import Weapon from "../../../weapons/weapon";
import User from "../../../user";
import TotalCompletion from "../weapons/totalCompletion";
import ChallengeBox from "./challengeBox";

export default class WeaponDetailPage extends React.Component<any, any> {

    private weapon: Weapon;

    constructor(props: any) {
        super(props);

        const weaponName = this.props.match.params.weapon.toLowerCase();
        const weaponClass = this.props.match.params.weaponclass.toLowerCase();
        const weapons = User.getWeapons();
        let i = 0;
        while (i < weapons.length && !this.weapon) {
            var w = weapons[i];
            if (w.getLink() === '/weapons/' + weaponClass + '/' + weaponName) {
                this.weapon = w;
            }
            i++;
        }
    }

    public render() {
        return (
            <div className='weapondetail-main'>

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
                        <div className='weapondetail-img'>
                            <div className='weapondetail-img-desc'>
                                <span>{this.weapon.description}</span>
                            </div>
                            <img src={this.weapon.img} />
                        </div>
                        <div className='weapondetail-progress'>
                            <TotalCompletion text={'Gold camo progress'}
                                progress={this.weapon.getCompletion()} />
                        </div>
                    </div>
                    <div className='weapondetail-content--right'>
                        <div className='weapondetail-challenges'>
                            {
                                this.weapon.challenges.map(c => {
                                    return (
                                        <ChallengeBox challenge={c} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}