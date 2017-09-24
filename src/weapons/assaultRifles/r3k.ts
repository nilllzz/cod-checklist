import Weapon from "../weapon";
import Challenge from "../challenge";
import AssaultRifle from "./assaultRifle";

export default class R3K extends AssaultRifle {

    constructor() {
        super(
            'R3K', 
            Weapon.WeaponClass.ARs,
            'r3k.png',  
            '3-round burst energy rifle. Each burt applies extreme stopping power at precise intervals.',
        );
    }


}