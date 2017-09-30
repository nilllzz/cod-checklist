import Weapon, { WeaponFact } from "../weapon";
import Handgun from "./handgun";

export default class UDM extends Handgun {

    constructor() {
        super(
            'UDM',
            'udm.png',
            'Full-auto ballistic pistol built from modular pieces. This configuration has a slow fire rate but high damage that is effective at longer ranges.',
        );

        this.diamondRequirement = false;
        this.facts.push(new WeaponFact('Magazine Size', '14 / 21'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}