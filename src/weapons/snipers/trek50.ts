import Weapon from "../weapon";
import Sniper from "./sniper";

export default class Trek50 extends Sniper {

    constructor() {
        super(
            'Trek-50',
            'trek50.png',  
            'Single fire ballistic rifle. Powerful, high caliber bullets allow for one shot, one kill capability anywhere on the body at the cost of aim assist.',
        );
    }


}