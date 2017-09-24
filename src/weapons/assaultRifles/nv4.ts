import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class NV4 extends AssaultRifle {

    constructor() {
        super(
            'NV4',
            'nv4.png',  
            'Full-auto ballistic rifle. A moderate fire rate yields increased stability for best-in-class accuracy. Ideal for mid to long range engagements.',
        );
    }


}