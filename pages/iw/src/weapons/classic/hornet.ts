import Challenge from "../challenge";
import Weapon from "../weapon";

export default class Hornet extends Weapon {

    constructor() {
        super(
            'Hornet',
            Weapon.WeaponClass.Classic,
            'hornet.png',
            'Full-auto ballistic pistol. Delivers the highest fire rate and recoil across all weapon classes.',
        );

        this.fireModes.push(Weapon.FireMode.fullauto);

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 50, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 100, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 150, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 200, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'headshots', 20, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'headshots', 40, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'headshots', 60, [wilderness]);
        const splatter = new Challenge(this, 'Splatter', "splatter", 'headshots', 100, [wilderness]);
        const zebra = new Challenge(this, 'Zebra', "zebra", 'headshots', 160, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'pointBlank', 25, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'noPrimary', 50, [snakeskin]);
        const bengal = new Challenge(this, 'Bengal', "bengal", 'allAttachments', 50, [salamander]);
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
