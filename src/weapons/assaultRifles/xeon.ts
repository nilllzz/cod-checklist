import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Xeon extends AssaultRifle {

    constructor() {
        super(
            'X-Eon',
            'xeon.png',  
            'Full-auto energy rifle. Advanced recoil compensation provides focused hip fire. Aiming down sights increases fire rate. Integrated optics provide enhanced detenction capabilities.',
        );
    }


}