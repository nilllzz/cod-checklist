import Weapon from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Titan extends LightMachineGun {

    constructor() {
        super(
            'Titan',
            'titan.png',  
            'Full-auto energy weapon. Delivers high damage with strong recoil.',
        );
    }


}