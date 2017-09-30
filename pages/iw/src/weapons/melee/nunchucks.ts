import Challenge from "../challenge";
import Weapon, { WeaponFact } from "../weapon";
import Melee from "./melee";

export default class Nunchucks extends Melee {

    constructor() {
        super(
            'Nunchucks',
            'nunchucks.png',
            'Pulverize enemies with this melee weapon that acquires targets in a wider range.',
        );
        
        this.diamondRequirement = false;
    }

}
