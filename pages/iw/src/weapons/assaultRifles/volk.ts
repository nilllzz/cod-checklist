import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Volk extends AssaultRifle {

    constructor() {
        super(
            'Volk',
            'volk.png',
            'Full-auto energy rifle. Deploys best-in-class stopping power at a low, dependable fire rate.',
        );

        this.facts.push(new WeaponFact('Damage', '34 - 30'));
        this.facts.push(new WeaponFact('Fire Rate', '483 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '28'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}