import Weapon, { WeaponFact } from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Auger extends LightMachineGun {

    constructor() {
        super(
            'Auger',
            'auger.png',
            'Full-auto ballistic minigun. Sustained fire allows the rate of fire to climb for maximum bullets downrange.',
        );

        this.diamondRequirement = false;

        this.facts.push(new WeaponFact('Magazine Size', '64 / 96'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}