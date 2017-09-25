import Weapon from "../weapon";
import Sniper from "./sniper";

export default class KBSLongbow extends Sniper {

    constructor() {
        super(
            'KBS Longbow',
            'kbslongbow.png',  
            'Bolt-action ballistic rifle. One shot, one kill from the waist-up. Rechambering breaks scope aim.',
        );

        this.manufacturer = 'kb';

    }


}