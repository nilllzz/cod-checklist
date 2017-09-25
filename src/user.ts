import Weapon from "./weapons/weapon";
import WeaponProvider from "./weapons/weaponProvider";
import Challenge from "./weapons/challenge";

export default class User {

    private static data: any;
    public static isLoaded: boolean;

    private static getDefaultData(): any {
        const data: any = {};
        ['NV4', 'R3K', 'KBAR-32', 'Type-2', 'Volk', 'R-VN', 'X-Eon', 'G-Rail', 'OSA'].forEach(weapon => {
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
        ['Erad', 'FHR-40', 'Karma-45', 'RPR Evo', 'HVR', 'VPR', 'Trencher', 'Raijin-EMX', 'MacTav-45'].forEach(weapon => {
            const weaponData = {
                kills: 0,
                hipshots: 0,
                pointBlank: 0,
                slide: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        ['R.A.W.', 'Mauler', 'Titan', 'Auger', 'Atlas'].forEach(weapon => {
            const weaponData = {
                kills: 0,
                headshots: 0,
                hipshots: 0,
                last15: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        ['KBS Longbow', 'EBR-800', 'Widowmaker', 'DMR-1', 'Trek-50', 'Proteus', 'TF-141', 'M1'].forEach(weapon => {
            const weaponData = {
                kills: 0,
                headshots: 0,
                longshots: 0,
                holdBreath: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        ['Reaver', 'Banshee', 'DCM-8', 'Rack-9', 'M.2187', 'S-Ravage'].forEach(weapon => {
            const weaponData = {
                kills: 0,
                hipshots: 0,
                pointBlank: 0,
                slide: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        ['EMC', 'Oni', 'Kendall 44', 'Hailstorm', 'UDM', 'Stallion .44', 'Hornet'].forEach(weapon => {
            const weaponData = {
                kills: 0,
                headshots: 0,
                pointBlank: 0,
                noPrimary: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
            data[weapon] = weaponData;
        });
        data['Spartan SA3'] = {
            scorestreakKills: 0,
            scorestreakScore: 0,
            noLock: 0,
            kills: 0,
            doubleKills: 0,
            threePerMatch: 0,
            streakAndEnemy: 0,
        };
        data['P-LAW'] = {
            scorestreakKills: 0,
            scorestreakScore: 0,
            kills: 0,
            rapid: 0,
            doubleKills: 0,
            threePerMatch: 0,
            streakAndEnemy: 0,
        };
        data['Howitzer'] = {
            kills: 0,
            directImpact: 0,
            rapid: 0,
            noPrimary: 0,
            scorestreakKills: 0,
            longshots: 0,
            threeKills: 0
        };
        data['Combat Knife'] = {
            kills: 0,
            backStab: 0,
            frontKills: 0,
            noPrimary: 0,
            slide: 0,
            rapid: 0,
            threeKills: 0
        };

        return data;
    }

    public static createNew() {
        console.log('create a new user storage');
        User.data = User.getDefaultData();
        User.save();
        User.data = undefined; // reset to load from storage afterwards
        User.load();
    }

    public static load() {
        console.log('attempt to load user data from storage.');
        const data = localStorage.getItem('data');
        if (!data) {
            console.log('no storage data found.');
            User.isLoaded = false;
        }
        else {
            console.log('storage data found, loading.');
            User.data = JSON.parse(data);
            User.isLoaded = true;
        }
    }

    public static save() {
        console.log('save data to storage.');
        const data = User.data;
        localStorage.setItem('data', JSON.stringify(data));
    }

    public static getData(): any {
        return User.data;
    }

    public static setWeaponChallengeValue(challenge: Challenge, value: number): void {
        User.data[challenge.weapon.name][challenge.valueName] = value;
        User.save();
    }

    private static weapons: Weapon[];

    public static getWeapons(): Weapon[] {
        if (User.weapons === undefined) {
            User.weapons = WeaponProvider.getWeapons();
        }

        return User.weapons;
    }

    public static getCompletion(weaponClass: string = ''): number {
        const weapons = User.getWeapons();
        let completion = 0;
        let count = 0;
        weapons.forEach(w => {
            if (weaponClass === '' || w.weaponClass === weaponClass) {
                completion += w.getCompletion();
                count++;
            }
        });
        completion /= count;
        return completion;
    }

}