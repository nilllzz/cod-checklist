import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class RPREvo extends SubmachineGun {

    constructor() {
        super(
            'RPR Evo',
            'rprevo.png',
            'Full-auto ballistic firearm. Can be toggled to assault rifle mode. An integrated hybrid sight enhances longer range engagements.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Damage', '30 - 16 (SMG) / 34 - 30 (AR)'));
        this.facts.push(new WeaponFact('Fire Rate', '909 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '32 / 48'));
        this.facts.push(new WeaponFact('Recoil', 'Moderate (SMG) / Low (AR)'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}