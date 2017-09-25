import Challenge from "./challenge";
import User from "../user";

export class WeaponFact {

    public static FireMode = {
        Auto: 'Automatic',
    }

    public name: string;
    public value: string;

    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}

export default abstract class Weapon {

    public static WeaponClass = {
        ARs: 'Assault Rifles',
        SMGs: 'Submachine Guns',
        LMGs: 'Light Machine Guns',
        Snipers: 'Sniper Rifles',
        Shotguns: 'Shotguns',
        Handguns: 'Handguns',
        Launchers: 'Launchers',
        Melee: 'Melee',
        Classic: 'Classic'
    }

    public static FireMode = {
        akimbo: [ 'akimbo', 'Akimbo' ],
        boltaction: [ 'boltaction', 'Bolt Action' ],
        breakaction: [ 'breakaction', 'Break Action' ],
        fullauto: [ 'fullauto', 'Automatic' ],
        leveraction: [ 'leveraction', 'Lever Action' ],
        melee: [ 'melee', 'Melee' ],
        pumpaction: [ 'pumpaction', 'Pump Action' ],
        semiauto: [ 'semiauto', 'Semi-Automatic' ],
        single: [ 'single', 'Single' ],
        threeroundburst: [ 'threeroundburst', '3 Round Burst' ],
        tworoundburst: [ 'tworoundburst', '2 Round Burst' ],
    }

    public name: string;
    public description: string;
    public weaponClass: string;
    public img: string;
    public diamondRequirement: boolean;

    public challenges: Challenge[];

    public facts: WeaponFact[];
    public manufacturer: string;
    public fireModes: any[];

    protected constructor(name: string, weaponClass: string, img: string, description: string) {
        this.name = name;
        this.description = description;
        this.weaponClass = weaponClass;
        this.img = 'resources/img/weapons/' + img;
        this.diamondRequirement = true;

        this.facts = [];
        this.fireModes = [];
    }

    public getData(): any {
        return User.getData()[this.name];
    }

    public getCompletion(): number {
        let challengeValue = 0;
        this.challenges.forEach(c => {
            challengeValue += c.getCompletion();
        });
        challengeValue /= this.challenges.length;
        return challengeValue;
    }

    public getLink() {
        return '/' +
            this.weaponClass.replace(' ', '').toLowerCase() +
            '/' +
            this.name.replace(' ', '').toLowerCase();
    }

}
