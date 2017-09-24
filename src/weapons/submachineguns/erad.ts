import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Erad extends SubmachineGun {

    constructor() {
        super(
            'Erad',
            'erad.png',  
            'Full-auto energy firearm. A wide dispersion muzzle dampens recoil, providing highest accuracy in class.',
        );
    }


}