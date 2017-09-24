import Weapon from "../weapon";
import AssaultRifle from "./assaultRifle";

export default class Type2 extends AssaultRifle {

    constructor() {
        super(
            'Type-2',
            'type2.png',  
            'Full-auto energy rifle. The rifle can be split into akimbo auto-pistols mode for close quarter combat. Features the highest fire rate in class.',
        );
    }


}