import Weapon from "../weapon";
import Sniper from "./sniper";

export default class Widowmaker extends Sniper {

    constructor() {
        super(
            'Widowmaker',
            'widowmaker.png',  
            '2-round burst bolt-action ballistic rifle. Features a unique chamber stack for predictable two round burst fire and a lightweight mold for increased mobility.',
        );
    }


}