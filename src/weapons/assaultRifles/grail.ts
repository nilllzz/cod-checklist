import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class GRail extends AssaultRifle {

    constructor() {
        super(
            'G-Rail',
            'grail.png',  
            'Semi-auto gauss rifle that fires electromagnetically propelled bullets. Aiming down sights charges the weapon to fire a more powerful shot at max charge.',
        );
    }


}