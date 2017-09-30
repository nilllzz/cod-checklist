import Weapon, { WeaponFact } from "../weapon";
import Sniper from "./sniper";

export default class Trek50 extends Sniper {

    constructor() {
        super(
            'Trek-50',
            'trek50.png',
            'Single fire ballistic rifle. Powerful, high caliber bullets allow for one shot, one kill capability anywhere on the body at the cost of aim assist.',
        );

        this.diamondRequirement = false;

        this.facts.push(new WeaponFact('Magazine Size', '1'));

        this.fireModes.push(Weapon.FireMode.breakaction);
    }


}