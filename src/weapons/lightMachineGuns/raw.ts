import Weapon from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class RAW extends LightMachineGun {

    constructor() {
        super(
            'R.A.W.',
            'raw.png',  
            'Full-auto energy weapon. Offers a dependable fire rate and high-capacity power cell for sustained output.',
        );
    }


}