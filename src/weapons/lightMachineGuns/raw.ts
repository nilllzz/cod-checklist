import Weapon, { WeaponFact } from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class RAW extends LightMachineGun {

    constructor() {
        super(
            'R.A.W.',
            'raw.png',
            'Full-auto energy weapon. Offers a dependable fire rate and high-capacity power cell for sustained output.',
        );

        this.manufacturer = 'Atomic Dynamics';

        this.facts.push(new WeaponFact('Magazine Size', '70'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}