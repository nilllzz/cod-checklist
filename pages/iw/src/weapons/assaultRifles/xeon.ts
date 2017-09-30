import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Xeon extends AssaultRifle {

    constructor() {
        super(
            'X-Eon',
            'xeon.png',
            'Full-auto energy rifle. Advanced recoil compensation provides focused hip fire. Aiming down sights increases fire rate. Integrated optics provide enhanced detenction capabilities.',
        );

        this.diamondRequirement = false;

        this.facts.push(new WeaponFact('Damage', '30 - 23'));
        this.facts.push(new WeaponFact('Fire Rate', '714 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '30'));
        this.facts.push(new WeaponFact('Recoil', 'Low - Medium'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}