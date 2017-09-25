import Weapon from "../weapon";
import Shotgun from "./shotgun";

export default class Reaver extends Shotgun {

    constructor() {
        super(
            'Reaver',
            'reaver.png',  
            'Semi-auto ballistic shotgun. Features a cyclic drum magazine for quick trigger response.',
        );
    }


}