import Weapon from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Auger extends LightMachineGun {

    constructor() {
        super(
            'Auger',
            'auger.png',
            'Full-auto ballistic minigun. Sustained fire allows the rate of fire to climb for maximum bullets downrange.',
        );
    }


}