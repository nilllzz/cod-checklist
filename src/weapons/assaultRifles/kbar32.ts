import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class KBAR32 extends AssaultRifle {

    constructor() {
        super(
            'KBAR-32',
            'kbar32.png',
            'Full-auto ballistic rifle. Channels a fast fire rate through a lightweight mold for increased hip fire control and mobility.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '30 - 19'));
        this.facts.push(new WeaponFact('Fire Rate', '731 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '36 / 72'));
        this.facts.push(new WeaponFact('Recoil', 'Moderate'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}