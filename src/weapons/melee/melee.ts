import Challenge from "../challenge";
import Weapon from "../weapon";

export default abstract class Melee extends Weapon {

    constructor(name: string, img: string, description: string) {
        super(name, Weapon.WeaponClass.Melee, img, description);

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 25, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 50, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 75, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 100, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'backStab', 10, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'backStab', 20, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'backStab', 30, [wilderness]);
        const splatter = new Challenge(this, 'Splatter', "splatter", 'backStab', 50, [wilderness]);
        const zebra = new Challenge(this, 'Zebra', "zebra", 'backStab', 80, [wilderness]);

        const autumn = new Challenge(this, 'Autumn', "autumn", 'frontKills', 25, [mojave]);
        const whiteout = new Challenge(this, 'Whiteout', "whiteout", 'noPrimary', 50, [snakeskin]);
        const bengal = new Challenge(this, 'Bengal', "bengal", 'slide', 25, [salamander]);
        const murderedOut = new Challenge(this, 'Murdered Out', "murdered_out", 'rapid', 10, [splatter]);
        const neonTiger = new Challenge(this, 'Neon Tiger', "neon_tiger", 'threeKills', 10, [zebra]);

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
