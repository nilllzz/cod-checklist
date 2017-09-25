import Challenge from "../challenge";
import Weapon from "../weapon";

export default class Howitzer extends Weapon {

    constructor() {
        super(
            'Howitzer',
            Weapon.WeaponClass.Launchers,
            'howitzer.png',
            'Grenade launcher. Launches quick, deadly projectiles that explode on impact.',
        );

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 50, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 100, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 150, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 200, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'directImpact', 20, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'directImpact', 40, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'directImpact', 60, [wilderness]);
        const splatter = new Challenge(this, 'splatter', "splatter", 'directImpact', 100, [wilderness]);
        const zebra = new Challenge(this, 'zebra', "zebra", 'directImpact', 160, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'rapid', 5, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'noPrimary', 50, [snakeskin]);
        const bengal = new Challenge(this, 'Bengal', "bengal", 'scorestreakKills', 15, [salamander]);
        const murderedOut = new Challenge(this, 'Murdered Out', "murdered_out", 'longshots', 30, [splatter]);
        const neonTiger = new Challenge(this, 'Neon Tiger', "neon_tiger", 'threeKills', 20, [zebra]);

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
