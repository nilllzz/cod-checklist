import Weapon, { WeaponFact } from "../weapon";
import Handgun from "./handgun";

export default class Hailstorm extends Handgun {

    constructor() {
        super(
            'Hailstorm',
            'hailstorm.png',
            '3-round burst ballistic pistol. Has a triple chamber stack for rapid three round bursts.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Magazine Size', '12'));

        this.fireModes.push(Weapon.FireMode.threeroundburst);
    }


}