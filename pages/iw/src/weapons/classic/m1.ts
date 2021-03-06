import Challenge from "../challenge";
import Weapon from "../weapon";

export default class M1 extends Weapon {

    constructor() {
        super(
            'M1',
            Weapon.WeaponClass.Classic,
            'm1.png',
            'Semi-auto ballistic rifle. An old, reliable service rifle with moderate stopping power and low recoil. The top-loading clip must be exhausted to reload.',
        );

        this.fireModes.push(Weapon.FireMode.semiauto);

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 50, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 100, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 150, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 200, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'headshots', 20, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'headshots', 40, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'headshots', 60, [wilderness]);
        const splatter = new Challenge(this, 'Splatter', "splatter", 'headshots', 100, [wilderness]);
        const zebra = new Challenge(this, 'Zebra', "zebra", 'headshots', 160, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'longshots', 25, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'holdBreath', 50, [snakeskin]);
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
