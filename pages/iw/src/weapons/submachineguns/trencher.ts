import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Trencher extends SubmachineGun {

    constructor() {
        super(
            'Trencher',
            'trencher.png',
            'Full-auto ballistic firearm. Modest fire rate and magazine grip provide natural stability.',
        );

        this.diamondRequirement = false;

        this.facts.push(new WeaponFact('Magazine Size', '32 / 48'));
        this.facts.push(new WeaponFact('Recoil', 'Low'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}