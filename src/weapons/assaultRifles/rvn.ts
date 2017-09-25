import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class RVN extends AssaultRifle {

    constructor() {
        super(
            'R-VN',
            'rvn.png',
            '2-round burst, auto-fire, energy rifle. The rifle can be split into melee mode for faster movement and 1 hit kills.',
        );

        this.diamondRequirement = false;

        this.manufacturer = 'Fujiwara';

        this.facts.push(new WeaponFact('Fire Rate', '950 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '30'));
        this.facts.push(new WeaponFact('Recoil', 'Very low'));

        this.fireModes.push(Weapon.FireMode.tworoundburst);
        this.fireModes.push(Weapon.FireMode.melee);
    }


}