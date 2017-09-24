import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class RVN extends AssaultRifle {

    constructor() {
        super(
            'R-VN',
            'rvn.png',  
            '2-round burst, auto-fire, energy rifle. The rifle can be split into melee mode for faster movement and 1 hit kills.',
        );
    }


}