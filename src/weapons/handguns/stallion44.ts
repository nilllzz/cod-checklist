import Weapon from "../weapon";
import Handgun from "./handgun";

export default class Stallion44 extends Handgun {

    constructor() {
        super(
            'Stallion .44',
            'stallion44.png',
            'Single fire ballistic revolver. Fanning the hammer provides faster fire from the hip that gets increasingly more accurate.',
        );
    }


}