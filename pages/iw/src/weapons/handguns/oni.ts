import Weapon, { WeaponFact } from "../weapon";
import Handgun from "./handgun";

export default class Oni extends Handgun {

    constructor() {
        super(
            'Oni',
            'oni.png',
            'Full-auto energy pistol. Features a harmonic microcontroller that accelerates fire rate over time.',
        );

        this.manufacturer = 'Mashimo';

        this.facts.push(new WeaponFact('Magazine Size', '24'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}