import Weapon from "../weapon";
import Shotgun from "./shotgun";

export default class DCM8 extends Shotgun {

    constructor() {
        super(
            'DCM-8',
            'dcm8.png',  
            'Full-auto energy shotgun. Rapid fire capability is supported by a high-capacity power cell.',
        );
    }


}