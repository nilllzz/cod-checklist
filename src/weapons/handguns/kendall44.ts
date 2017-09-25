import Weapon from "../weapon";
import Handgun from "./handgun";

export default class Kendall44 extends Handgun {

    constructor() {
        super(
            'Kendall 44',
            'kendall44.png',
            'Semi-auto ballistic pistol. Allows ultra-fast trigger cycling in a lightweight mold for increased hip fire control.',
        );
    }


}