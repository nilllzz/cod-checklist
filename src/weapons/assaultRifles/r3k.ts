import Weapon, { WeaponFact } from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class R3K extends AssaultRifle {

    constructor() {
        super(
            'R3K',
            'r3k.png',
            '3-round burst energy rifle. Each burt applies extreme stopping power at precise intervals.',
        );

        this.manufacturer = 'sdf';

        this.facts.push(new WeaponFact('Damage', '35 - 30'));
        this.facts.push(new WeaponFact('Fire Rate', '909 RPM per burst'));
        this.facts.push(new WeaponFact('Magazine Size', '30'));
        this.facts.push(new WeaponFact('Recoil', 'Low'));

        this.fireModes.push(Weapon.FireMode.threeroundburst);
    }


}