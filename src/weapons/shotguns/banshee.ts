import Weapon, { WeaponFact } from "../weapon";
import Shotgun from "./shotgun";

export default class Banshee extends Shotgun {

    constructor() {
        super(
            'Banshee',
            'banshee.png',
            'Pump-auto sonic shotgun. Employs a high decibel acoustic driver yielding balanced stopping power and fire rate.',
        );
        
        this.facts.push(new WeaponFact('Damage', '8'));
        this.facts.push(new WeaponFact('Magazine Size', '10'));

        this.fireModes.push(Weapon.FireMode.pumpaction);
    }


}