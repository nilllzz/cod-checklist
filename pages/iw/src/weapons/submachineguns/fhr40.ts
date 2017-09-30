import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class FHR40 extends SubmachineGun {

    constructor() {
        super(
            'FHR-40',
            'fhr40.png',
            'Full-auto ballistic firearm. Offsets a modest range with an extreme fire rate thanks to a unique magnetic bolt carrier.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '30 - 16'));
        this.facts.push(new WeaponFact('Fire Rate', '967 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '40 / 60'));
        this.facts.push(new WeaponFact('Recoil', 'High'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}