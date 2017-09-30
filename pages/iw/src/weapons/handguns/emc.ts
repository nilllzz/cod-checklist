import Weapon, { WeaponFact } from "../weapon";
import Handgun from "./handgun";

export default class EMC extends Handgun {

    constructor() {
        super(
            'EMC',
            'emc.png',
            'Semi-auto energy pistol. Reliably delivers consistent stopping power.',
        );

        this.manufacturer = 'sdf';

        this.facts.push(new WeaponFact('Magazine Size', '14'));

        this.fireModes.push(Weapon.FireMode.semiauto);
    }


}