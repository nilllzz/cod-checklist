import Challenge from "./challenge";
import User from "../user";
import NV4 from "./assaultRifles/nv4";
import R3K from "./assaultRifles/r3k";

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

    public name: string;
    public description: string;
    public weaponClass: string;
    public img: string;

    public challenges: Challenge[];

    public facts: WeaponFact[];
    public manufacturer: string;

    protected constructor(name: string, weaponClass: string, img: string, description: string) {
        this.name = name;
        this.description = description;
        this.weaponClass = weaponClass;
        this.img = 'resources/img/weapons/' + img;

        this.facts = [];
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
        return '/weapons/' +
            this.weaponClass.replace(' ', '').toLowerCase() +
            '/' +
            this.name.replace(' ', '').toLowerCase();
    }

}
