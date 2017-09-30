import Weapon, { WeaponFact } from "../weapon";
import Shotgun from "./shotgun";

export default class M2187 extends Shotgun {

    constructor() {
        super(
            'M.2187',
            'm2187.png',
            'Lever action ballistic shotgun. Advanced materials provide the longest range shotgun in class.',
        );

        this.diamondRequirement = false;

        this.facts.push(new WeaponFact('Magazine Size', '6'));

        this.fireModes.push(Weapon.FireMode.leveraction);
    }


}