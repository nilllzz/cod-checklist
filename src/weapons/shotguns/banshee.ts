import Weapon from "../weapon";
import Shotgun from "./shotgun";

export default class Banshee extends Shotgun {

    constructor() {
        super(
            'Banshee',
            'banshee.png',  
            'Pump-auto sonic shotgun. Employs a high decibel acoustic driver yielding balanced stopping power and fire rate.',
        );
    }


}