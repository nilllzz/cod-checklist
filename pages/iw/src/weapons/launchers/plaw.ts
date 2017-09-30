import Challenge from "../challenge";
import Weapon, { WeaponFact } from "../weapon";

export default class PLAW extends Weapon {

    constructor() {
        super(
            'P-LAW',
            Weapon.WeaponClass.Launchers,
            'plaw.png',
            'Charged energy launcher. Deploys volatile plasma charges that explode for extreme splash damage.',
        );
        
        this.manufacturer = 'Atomic Dynamics';

        this.facts.push(new WeaponFact('Magazine Size', '3'));

        this.fireModes.push(Weapon.FireMode.semiauto);

        const desert = new Challenge(this, 'Desert', 'desert', 'scorestreakKills', 5, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'scorestreakKills', 10, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'scorestreakKills', 15, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'scorestreakKills', 20, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'scorestreakScore', 8000, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'scorestreakScore', 16000, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'scorestreakScore', 24000, [wilderness]);
        const splatter = new Challenge(this, 'Splatter', "splatter", 'scorestreakScore', 32000, [wilderness]);
        const zebra = new Challenge(this, 'Zebra', "zebra", 'scorestreakScore', 45000, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'kills', 50, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'rapid', 5, [snakeskin]);
        const bengal = new Challenge(this, 'Bengal', "bengal", 'doubleKills', 3, [salamander]);
        const murderedOut = new Challenge(this, 'Murdered Out', "murdered_out", 'threePerMatch', 10, [splatter]);
        const neonTiger = new Challenge(this, 'Neon Tiger', "neon_tiger", 'streakAndEnemy', 10, [zebra]);

        this.challenges = [
            desert,
            mars,
            arcticTech,
            wilderness,
            mojave,
            snakeskin,
            salamander,
            splatter,
            zebra,
            autumn,
            whiteout,
            bengal,
            murderedOut,
            neonTiger
        ]
    }

}
