import Weapon, { WeaponFact } from "../weapon";
import Shotgun from "./shotgun";

export default class Reaver extends Shotgun {

    constructor() {
        super(
            'Reaver',
            'reaver.png',
            'Semi-auto ballistic shotgun. Features a cyclic drum magazine for quick trigger response.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Magazine Size', '10 / 15'));
        this.facts.push(new WeaponFact('Recoil', 'Low'));

        this.fireModes.push(Weapon.FireMode.semiauto);
    }


}