import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class HVR extends SubmachineGun {

    constructor() {
        super(
            'HVR',
            'hvr.png',
            'Full-auto ballistic firearm. Uses heavy terrestrial ammo for best in class stopping power.',
        );

        this.manufacturer = 'Fujiwara';

        this.facts.push(new WeaponFact('Magazine Size', '26 / 39'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}