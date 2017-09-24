import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class HVR extends SubmachineGun {

    constructor() {
        super(
            'HVR',
            'hvr.png',  
            'Full-auto ballistic firearm. Uses heavy terrestrial ammo for best in class stopping power.',
        );
    }


}