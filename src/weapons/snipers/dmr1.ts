import Weapon from "../weapon";
import Sniper from "./sniper";

export default class DMR1 extends Sniper {

    constructor() {
        super(
            'DMR-1',
            'dmr1.png',  
            'Semi-auto ballistic rifle. Updated design retains the top-loading clip while granting moderate stopping power and low recoil. Allows early clip ejection.',
        );
    }


}