import Weapon from "../weapon";
import Sniper from "./sniper";

export default class Proteus extends Sniper {

    constructor() {
        super(
            'Proteus',
            'proteus.png',  
            'Pump action sniper/shotgun hybrid rifle that fires shotgun rounds in highly concentrated trajectories while aiming down sight. Can be toggled to shotgun mode which provides short range firepower at wider dispersion, Highly effective on targets from the neck up.',
        );
    }


}