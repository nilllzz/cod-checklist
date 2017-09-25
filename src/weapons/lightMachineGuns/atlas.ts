import Weapon from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Atlas extends LightMachineGun {

    constructor() {
        super(
            'Atlas',
            'atlas.png',
            'Full-auto ballistic weapon. Best in class accuracy and range but has limited ammo capacity. The built in underbarrel fires a tactical Smoke Drone that moves down range while producing visual cover.',
        );

        this.manufacturer = 'kb';

    }


}