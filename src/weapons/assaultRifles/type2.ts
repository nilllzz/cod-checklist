import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Type2 extends AssaultRifle {

    constructor() {
        super(
            'Type-2',
            'type2.png',
            'Full-auto energy rifle. The rifle can be split into akimbo auto-pistols mode for close quarter combat. Features the highest fire rate in class.',
        );

        this.manufacturer = 'Fujiwara';

        this.facts.push(new WeaponFact('Damage', '23 - 19'));
        this.facts.push(new WeaponFact('Fire Rate', '836 RPM (Auto) / 1400 RPM (Akimbo)'));
        this.facts.push(new WeaponFact('Magazine Size', '35'));
        this.facts.push(new WeaponFact('Recoil', 'Low - Moderate'));

        this.fireModes.push(Weapon.FireMode.fullauto);
        this.fireModes.push(Weapon.FireMode.akimbo);
    }


}