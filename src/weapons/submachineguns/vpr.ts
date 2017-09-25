import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class VPR extends SubmachineGun {

    constructor() {
        super(
            'VPR',
            'vpr.png',
            'Full-auto ballistic firearm. Dual barrels and dual magazines provide both increased bullets down range and faster reloads.',
        );

        this.diamondRequirement = false;

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '18 - 9 (x2)'));
        this.facts.push(new WeaponFact('Fire Rate', '810 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '36 / 54'));
        this.facts.push(new WeaponFact('Recoil', 'Moderate'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}