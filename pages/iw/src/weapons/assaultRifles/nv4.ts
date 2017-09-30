import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class NV4 extends AssaultRifle {

    constructor() {
        super(
            'NV4',
            'nv4.png',  
            'Full-auto ballistic rifle. A moderate fire rate yields increased stability for best-in-class accuracy. Ideal for mid to long range engagements.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '30 - 23'));
        this.facts.push(new WeaponFact('Fire Rate', '612 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '30 / 45'));
        this.facts.push(new WeaponFact('Recoil', 'Very low'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}