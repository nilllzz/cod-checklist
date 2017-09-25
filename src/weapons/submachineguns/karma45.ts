import Weapon, { WeaponFact } from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Karma45 extends SubmachineGun {

    constructor() {
        super(
            'Karma-45',
            'karma45.png',
            'Full-auto ballistic firearm. Built-in dual magazines provide faster reloads and increased ammo capacity.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Fire Rate', '800 RPM'));
        this.facts.push(new WeaponFact('Magazine Size', '42 / 63'));
        this.facts.push(new WeaponFact('Recoil', 'Medium'));

        this.fireModes.push(Weapon.FireMode.fullauto);
    }


}