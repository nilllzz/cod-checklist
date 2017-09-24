import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class KBAR32 extends AssaultRifle {

    constructor() {
        super(
            'KBAR-32',
            'kbar32.png',  
            'Full-auto ballistic rifle. Channels a fast fire rate through a lightweight mold for increased hip fire control and mobility.',
        );
    }


}