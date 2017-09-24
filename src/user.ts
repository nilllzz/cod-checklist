import Weapon from "./weapons/weapon";
import NV4 from "./weapons/assaultRifles/nv4";
import R3K from "./weapons/assaultRifles/r3k";
import KBAR32 from "./weapons/assaultRifles/kbar32";
import Type2 from "./weapons/assaultRifles/type2";
import Volk from "./weapons/assaultRifles/volk";
import RVN from "./weapons/assaultRifles/rvn";
import Xeon from "./weapons/assaultRifles/xeon";
import GRail from "./weapons/assaultRifles/grail";
import Erad from "./weapons/submachineguns/erad";
import FHR40 from "./weapons/submachineguns/fhr40";
import Karma45 from "./weapons/submachineguns/karma45";
import RPREvo from "./weapons/submachineguns/rprevo";
import HVR from "./weapons/submachineguns/hvr";
import VPR from "./weapons/submachineguns/vpr";
import Trencher from "./weapons/submachineguns/trencher";
import RaijinEMX from "./weapons/submachineguns/raijinemx";

export default class User {

    private static data: any;

    private static getDefaultData(): any {
        const data: any = {};
        ['NV4', 'R3K', 'KBAR-32', 'Type-2', 'Volk', 'R-VN', 'X-Eon', 'G-Rail'].forEach(weapon => {
            const weaponData = {
                kills: 200,
                headshots: 72,
                longshots: 11,
                optic: 41,
                noAttachments: 4,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        ['Erad', 'FHR-40', 'Karma-45', 'RPR Evo', 'HVR', 'VPR', 'Trencher', 'Raijin-EMX'].forEach(weapon => {
            const weaponData = {
                kills: 120,
                hipshots: 0,
                pointBlank: 0,
                slide: 0,
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
                new R3K(),
                new KBAR32(),
                new Type2(),
                new Volk(),
                new RVN(),
                new Xeon(),
                new GRail(),
                
                new Erad(),
                new FHR40(),
                new Karma45(),
                new RPREvo(),
                new HVR(),
                new VPR(),
                new Trencher(),
                new RaijinEMX()
            ];
        }

        return User.weapons;
    }

    public static getCompletion(weaponClass: string = ''): number {
        const weapons = User.getWeapons();
        let completion = 0;
        weapons.forEach(w => {
            if (weaponClass === '' || w.weaponClass === weaponClass) {
                completion += w.getCompletion();
            }
        });
        completion /= weapons.length;
        return completion;
    }

}