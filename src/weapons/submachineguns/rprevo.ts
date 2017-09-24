import Weapon from "../weapon";
import SubmachineGun from "./submachineGun";

export default class RPREvo extends SubmachineGun {

    constructor() {
        super(
            'RPR Evo',
            'rprevo.png',  
            'Full-auto ballistic firearm. Can be toggled to assault rifle mode. An integrated hybrid sight enhances longer range engagements.',
        );
    }


}