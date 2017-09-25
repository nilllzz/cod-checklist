import Weapon, { WeaponFact } from "../weapon";
import Sniper from "./sniper";

export default class KBSLongbow extends Sniper {

    constructor() {
        super(
            'KBS Longbow',
            'kbslongbow.png',
            'Bolt-action ballistic rifle. One shot, one kill from the waist-up. Rechambering breaks scope aim.',
        );

        this.manufacturer = 'kb';

        this.facts.push(new WeaponFact('Magazine Size', '6 / 9'));

        this.fireModes.push(Weapon.FireMode.boltaction);
    }


}