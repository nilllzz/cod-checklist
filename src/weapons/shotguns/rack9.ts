import Weapon, { WeaponFact } from "../weapon";
import Shotgun from "./shotgun";

export default class Rack9 extends Shotgun {

    constructor() {
        super(
            'Rack-9',
            'rack9.png',
            'Pump-action ballistic shotgun. 12 gauge terrestrial ammo provides superior stopping power, while the integrated choke increases ADS accuracy.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Magazine Size', '9 / 13'));

        this.fireModes.push(Weapon.FireMode.pumpaction);
    }


}