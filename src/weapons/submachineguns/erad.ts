import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Erad extends SubmachineGun {

    constructor() {
        super(
            'Erad',
            'erad.png',
            'Full-auto energy firearm. A wide dispersion muzzle dampens recoil, providing highest accuracy in class.',
        );

        this.manufacturer = 'Mashimo';

        this.facts.push(new WeaponFact('Damage', '30 - 19'));
        this.facts.push(new WeaponFact('Fire Rate', '810 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '30'));
        this.facts.push(new WeaponFact('Recoil', 'Low'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}