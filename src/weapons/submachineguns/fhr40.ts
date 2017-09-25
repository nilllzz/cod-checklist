import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class FHR40 extends SubmachineGun {

    constructor() {
        super(
            'FHR-40',
            'fhr40.png',
            'Full-auto ballistic firearm. Offsets a modest range with an extreme fire rate thanks to a unique magnetic bolt carrier.',
        );

        this.manufacturer = 'kb';

    }


}