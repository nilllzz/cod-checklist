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
    private unlockedDiamond: boolean;

    constructor(props: any) {
        super(props);

        const weaponClass = this.props.match.params.weaponclass.toLowerCase();

        this.weapons = User.getWeapons().filter(w =>
            w.weaponClass.replace(' ', '').toLowerCase() == weaponClass);

        this.weaponClass = this.weapons[0].weaponClass;

        let unlockedDiamond = true;
        for (let i = 0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if (weapon.diamondRequirement && weapon.getCompletion() < 1) {
                unlockedDiamond = false;
            }
        }
        this.unlockedDiamond = unlockedDiamond;
    }

    public render() {
        return (
            <div className='weaponclass-main'>

                <ArrowBack linkTo={'/'} />
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
                                        <div key={w.name} className={'weaponclass-progress-gold' +
                                            (w.getCompletion() == 1 ? '' : ' weaponclass-progress-gold-disabled')}>
                                            <img src='resources/img/camos/gold.png' />
                                        </div>
                                    )
                                })
                            }
                            <div key={'diamond'} className={'weaponclass-progress-gold' +
                                (this.unlockedDiamond ? '' : ' weaponclass-progress-gold-disabled')}>
                                <img src='resources/img/camos/diamond.png' />
                            </div>
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
                                        <WeaponBox weapon={w} key={w.name} />
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