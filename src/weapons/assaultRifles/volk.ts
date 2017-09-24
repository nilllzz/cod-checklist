import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Volk extends AssaultRifle {

    constructor() {
        super(
            'Volk',
            'volk.png',  
            'Full-auto energy rifle. Deploys best-in-class stopping power at a low, dependable fire rate.',
        );
    }


}