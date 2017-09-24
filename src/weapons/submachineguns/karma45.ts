import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class Karma45 extends SubmachineGun {

    constructor() {
        super(
            'Karma-45',
            'karma45.png',  
            'Full-auto ballistic firearm. Built-in dual magazines provide faster reloads and increased ammo capacity.',
        );
    }


}