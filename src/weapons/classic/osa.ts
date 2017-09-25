import Challenge from "../challenge";
import Weapon from "../weapon";

export default class OSA extends Weapon {

    constructor() {
        super(
            'OSA',
            Weapon.WeaponClass.Classic,
            'osa.png',
            'Full-auto ballistic rifle. Celebrated for rapid, powerful fire and an integrated grenade launcher.',
        );

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 50, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 100, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 150, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 200, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'headshots', 20, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'headshots', 40, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'headshots', 60, [wilderness]);
        const splatter = new Challenge(this, 'splatter', "splatter", 'headshots', 100, [wilderness]);
        const zebra = new Challenge(this, 'zebra', "zebra", 'headshots', 160, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'longshots', 25, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'optic', 50, [snakeskin]);
        const bengal = new Challenge(this, 'Bengal', "bengal", 'noAttachments', 50, [salamander]);
        const murderedOut = new Challenge(this, 'Murdered Out', "murdered_out", 'rapid', 20, [splatter]);
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
