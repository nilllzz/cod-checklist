import Weapon, { WeaponFact } from "../weapon";
import Sniper from "./sniper";

export default class EBR800 extends Sniper {

    constructor() {
        super(
            'EBR-800',
            'ebr800.png',
            'Semi-auto energy rifle. Assault rifle mode can be activated for automatic fire and reduced power consumption.',
        );

        this.manufacturer = 'edi';

        this.facts.push(new WeaponFact('Magazine Size', '8 (Sniper) / 32 (AR)'));

        this.fireModes.push(Weapon.FireMode.semiauto);
        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}