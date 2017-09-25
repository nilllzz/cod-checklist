import Challenge from "../challenge";
import Weapon from "../weapon";

export default class SpartanSA3 extends Weapon {

    constructor() {
        super(
            'Spartan SA3',
            Weapon.WeaponClass.Launchers,
            'spartansa3.png',
            'Lock-on launcher. Primarily anti-air with an optical smart lock, but can be dumb fired.',
        );

        const desert = new Challenge(this, 'Desert', 'desert', 'scorestreakKills', 5, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'scorestreakKills', 10, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'scorestreakKills', 15, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'scorestreakKills', 20, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'scorestreakScore', 8000, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'scorestreakScore', 16000, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'scorestreakScore', 24000, [wilderness]);
        const splatter = new Challenge(this, 'splatter', "splatter", 'scorestreakScore', 32000, [wilderness]);
        const zebra = new Challenge(this, 'zebra', "zebra", 'scorestreakScore', 45000, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'noLock', 20, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'kills', 25, [snakeskin]);
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
