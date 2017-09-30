import Weapon, { WeaponFact } from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Titan extends LightMachineGun {

    constructor() {
        super(
            'Titan',
            'titan.png',
            'Full-auto energy weapon. Delivers high damage with strong recoil.',
        );

        this.manufacturer = 'Atomic Dynamics';

        this.facts.push(new WeaponFact('Magazine Size', '100'));
        this.facts.push(new WeaponFact('Recoil', 'Medium - High'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}