import Weapon from "./weapons/weapon";
import WeaponProvider from "./weapons/weaponProvider";
import Challenge from "./weapons/challenge";

export default class User {

    private static data: any;
    public static isLoaded: boolean;

    private static getDefaultData(): any {
        const data: any = {};
        ['NV4', 'R3K', 'KBAR-32', 'Type-2', 'Volk', 'R-VN', 'X-Eon', 'G-Rail', 'OSA'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                headshots: 0,
                longshots: 0,
                optic: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
        });
        ['Erad', 'FHR-40', 'Karma-45', 'RPR Evo', 'HVR', 'VPR', 'Trencher', 'Raijin-EMX', 'MacTav-45'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                hipshots: 0,
                pointBlank: 0,
                slide: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
        });
        ['R.A.W.', 'Mauler', 'Titan', 'Auger', 'Atlas'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                headshots: 0,
                hipshots: 0,
                last15: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
        });
        ['KBS Longbow', 'EBR-800', 'Widowmaker', 'DMR-1', 'Trek-50', 'Proteus', 'TF-141', 'M1'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                headshots: 0,
                longshots: 0,
                holdBreath: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
        });
        ['Reaver', 'Banshee', 'DCM-8', 'Rack-9', 'M.2187', 'S-Ravage'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                hipshots: 0,
                pointBlank: 0,
                slide: 0,
                noAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
        });
        ['EMC', 'Oni', 'Kendall 44', 'Hailstorm', 'UDM', 'Stallion .44', 'Hornet'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                headshots: 0,
                pointBlank: 0,
                noPrimary: 0,
                allAttachments: 0,
                rapid: 0,
                threeKills: 0,
            };
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
        ['Howitzer', 'Venom-X'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                directImpact: 0,
                rapid: 0,
                noPrimary: 0,
                scorestreakKills: 0,
                longshots: 0,
                threeKills: 0,
            };
        });
        ['Combat Knife', 'Katana', 'Nunchucks'].forEach(weapon => {
            data[weapon] = {
                kills: 0,
                backStab: 0,
                frontKills: 0,
                noPrimary: 0,
                slide: 0,
                rapid: 0,
                threeKills: 0,
            };
        });

        return data;
    }

    public static createNew() {
        console.log('create a new user storage');
        User.data = User.getDefaultData();
        User.save();
        User.data = undefined; // reset to load from storage afterwards
        localStorage.removeItem('unloaded-data'); // remove any set aside data
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
            User.data = User.loadData(data);
            User.isLoaded = true;
        }
    }

    private static loadData(dataInput: string): void {
        // add any missing data entries to the loaded user data
        try {
            const data = JSON.parse(dataInput);
            if (typeof data === 'object' && !Array.isArray(data)) {
                const defaultData = User.getDefaultData();
                for (var property in defaultData) {
                    if (defaultData.hasOwnProperty(property)) {
                        var value = defaultData[property];
                        if (!data[property]) {
                            data[property] = value;
                        }
                    }
                }
                return data;
            }
            else {
                // loaded some bullshit, give em the old default data.
                return User.getDefaultData();
            }
        } catch {
            // any errors while attempting to load will result in the default dataset
            return User.getDefaultData();
        }
    }

    public static unload() {
        const data = localStorage.getItem('data');
        localStorage.setItem('unloaded-data', data);
        localStorage.removeItem('data');
        User.isLoaded = false;
    }

    public static restore() {
        const data = localStorage.getItem('unloaded-data');
        if (!!data) {
            localStorage.setItem('data', data);
            localStorage.removeItem('unloaded-data');
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