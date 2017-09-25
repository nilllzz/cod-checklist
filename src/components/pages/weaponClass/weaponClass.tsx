import * as React from "react";
import User from "../../../user";
import Weapon from "../../../weapons/weapon";
import WeaponBox from "../weapons/weaponBox";
import IWLogo from "../../iw_logo";
import TotalCompletion from "../weapons/totalCompletion";
import ArrowBack from "../../arrowBack";

export default class WeaponClassPage extends React.Component<any, any> {

    private weapons: Weapon[];
    private weaponClass: string;

    constructor(props: any) {
        super(props);

        const weaponClass = this.props.match.params.weaponclass.toLowerCase();

        this.weapons = User.getWeapons().filter(w =>
            w.weaponClass.replace(' ', '').toLowerCase() == weaponClass);

        this.weaponClass = this.weapons[0].weaponClass;
    }

    public render() {
        return (
            <div className='weaponclass-main'>

                <ArrowBack linkTo={'/weapons'} />
                <IWLogo />

                <div className='weaponclass-content'>
                    <div className='weaponclass-progress'>
                        <div className='weaponclass-progress-bar'>
                            <TotalCompletion
                                text={'Completion progress for ' + this.weaponClass}
                                progress={User.getCompletion(this.weaponClass)} />
                        </div>
                        <div className='weaponclass-progress-badges'>
                            {
                                this.weapons.map(w => {
                                    return (
                                        <div className={'weaponclass-progress-gold' +
                                            (w.getCompletion() == 1 ? '' : ' weaponclass-progress-gold-disabled')}>
                                            <img src='resources/img/camos/gold.png' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='weaponclass-weapons'>
                        <div className='weaponclass-weapons-title'>
                            <span>Weapons</span>
                        </div>
                        <div className='weaponclass-weapons-list'>
                            {
                                this.weapons.map(w => {
                                    return (
                                        <WeaponBox weapon={w} />
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