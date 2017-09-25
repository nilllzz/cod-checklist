import Weapon from "../weapon";
import Handgun from "./handgun";

export default class Oni extends Handgun {

    constructor() {
        super(
            'Oni',
            'oni.png',
            'Full-auto energy pistol. Features a harmonic microcontroller that accelerates fire rate over time.',
        );
    }


}