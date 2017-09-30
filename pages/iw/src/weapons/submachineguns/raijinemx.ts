import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class RaijinEMX extends SubmachineGun {

    constructor() {
        super(
            'Raijin-EMX',
            'raijinemx.png',
            '3-round burst ballistic firearm. Accurate at longer ranges but can be fired quickly at the expense of accuracy. Comes with a built in EMP launcher that detonates on impact.',
        );

        this.diamondRequirement = false;

        this.manufacturer = 'sdf';

        this.facts.push(new WeaponFact('Magazine Size', '30'));

        this.fireModes.push(Weapon.FireMode.threeroundburst);
    }


}