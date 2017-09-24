import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Trencher extends SubmachineGun {

    constructor() {
        super(
            'Trencher',
            'trencher.png',  
            'Full-auto ballistic firearm. Modest fire rate and magazine grip provide natural stability.',
        );
    }


}