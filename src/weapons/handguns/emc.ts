import Weapon from "../weapon";
import Handgun from "./handgun";

export default class EMC extends Handgun {

    constructor() {
        super(
            'EMC',
            'emc.png',
            'Semi-auto energy pistol. Reliably delivers consistent stopping power.',
        );
    }


}