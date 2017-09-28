import Challenge from "../challenge";
import Weapon, { WeaponFact } from "../weapon";

export default class VenomX extends Weapon {

    constructor() {
        super(
            'Venom-X',
            Weapon.WeaponClass.Launchers,
            'venomx.png',
            'Experimental projectile launcher with two modes. Can fire a long range projectile that sticks on impact or quickly shoot shorter range projectiles with lower damage.',
        );
        
        this.diamondRequirement = false;
        
        this.fireModes.push(Weapon.FireMode.semiauto);

        const desert = new Challenge(this, 'Desert', 'desert', 'kills', 50, []);
        const mars = new Challenge(this, 'Mars', 'mars', 'kills', 100, []);
        const arcticTech = new Challenge(this, 'Arctic Tech', 'arctic_tech', 'kills', 150, []);
        const wilderness = new Challenge(this, 'Wilderness', 'wilderness', 'kills', 200, []);

        const mojave = new Challenge(this, 'Mojave', "mojave", 'directImpact', 20, [wilderness]);
        const snakeskin = new Challenge(this, 'Snake Skin', "snake_skin", 'directImpact', 40, [wilderness]);
        const salamander = new Challenge(this, 'Salamander', "salamander", 'directImpact', 60, [wilderness]);
        const splatter = new Challenge(this, 'Splatter', "splatter", 'directImpact', 100, [wilderness]);
        const zebra = new Challenge(this, 'Zebra', "zebra", 'directImpact', 160, [wilderness]);

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
