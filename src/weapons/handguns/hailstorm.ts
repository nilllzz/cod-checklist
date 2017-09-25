import Weapon from "../weapon";
import Handgun from "./handgun";

export default class Hailstorm extends Handgun {

    constructor() {
        super(
            'Hailstorm',
            'hailstorm.png',
            '3-round burst ballistic pistol. Has a triple chamber stack for rapid three round bursts.',
        );
    }


}