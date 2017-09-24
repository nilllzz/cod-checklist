import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class VPR extends SubmachineGun {

    constructor() {
        super(
            'VPR',
            'vpr.png',  
            'Full-auto ballistic firearm. Dual barrels and dual magazines provide both increased bullets down range and faster reloads.',
        );
    }


}