import Weapon from "./weapons/weapon";
import NV4 from "./weapons/assaultRifles/nv4";
import R3K from "./weapons/assaultRifles/r3k";

export default class User {

    private static data: any;

    private static getDefaultData(): any {
        const data: any = {};
        ["NV4", "R3K"].forEach(weapon => {
            const weaponData = {
                kills: 0,
                headshots: 0,
                longshots: 0,
                optic: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        return data;
    }

    public static load() {
        User.data = User.getDefaultData();
    }

    public static save() {

    }

    public static getData(): any {
        User.load();
        return User.data;
    }

    private static weapons: Weapon[];

    public static getWeapons(): Weapon[] {
        if (User.weapons === undefined) {
            User.weapons = [
                new NV4(),
                new R3K()
            ];
        }

        return User.weapons;
    }

    public static getCompletion(): number {
        const weapons = User.getWeapons();
        let completion = 0;
        weapons.forEach(w => {
            completion += w.getCompletion();
        });
        completion /= weapons.length;
        return completion;
    }

}