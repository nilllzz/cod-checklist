import Challenge from "../challenge";
import Weapon, { WeaponFact } from "../weapon";
import Melee from "./melee";

export default class Katana extends Melee {

    constructor() {
        super(
            'Katana',
            'katana.png',
            'Slice and dice opponents at an extended range.',
        );
        
        this.diamondRequirement = false;
    }

}
