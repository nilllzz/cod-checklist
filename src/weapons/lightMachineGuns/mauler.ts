import Weapon from "../weapon";
import LightMachineGun from "./lightMachineGun";

export default class Mauler extends LightMachineGun {

    constructor() {
        super(
            'Mauler',
            'mauler.png',
            'Full-auto heavy ballistic weapon. An experimental gaussian delinker channels ultra-rapid fire int a tight hip spread.',
        );

        this.manufacturer = 'kb';

    }


}