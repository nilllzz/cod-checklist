import * as React from "react";
import IWLogo from "../../iw_logo";
import Weapon from "../../../weapons/weapon";
import User from "../../../user";

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

            </div>

        );
    }

}