import Weapon, { WeaponFact } from "../weapon";
import Handgun from "./handgun";

export default class Kendall44 extends Handgun {

    constructor() {
        super(
            'Kendall 44',
            'kendall44.png',
            'Semi-auto ballistic pistol. Allows ultra-fast trigger cycling in a lightweight mold for increased hip fire control.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '30 - 23'));
        this.facts.push(new WeaponFact('Fire Rate', '697 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '16 / 24'));
        this.facts.push(new WeaponFact('Recoil', 'Low'));

        this.fireModes.push(Weapon.FireMode.semiauto);
    }


}