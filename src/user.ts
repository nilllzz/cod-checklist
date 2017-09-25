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
import RAW from "./weapons/lightMachineGuns/raw";
import Mauler from "./weapons/lightMachineGuns/mauler";
import Titan from "./weapons/lightMachineGuns/titan";
import Auger from "./weapons/lightMachineGuns/auger";
import Atlas from "./weapons/lightMachineGuns/Atlas";
import KBSLongbow from "./weapons/snipers/kbslongbow";
import EBR800 from "./weapons/snipers/ebr800";
import Widowmaker from "./weapons/snipers/widowmaker";
import Trek50 from "./weapons/snipers/trek50";
import Proteus from "./weapons/snipers/proteus";
import DMR1 from "./weapons/snipers/dmr1";
import Reaver from "./weapons/shotguns/reaver";
import Banshee from "./weapons/shotguns/Banshee";
import DCM8 from "./weapons/shotguns/dcm8";
import Rack9 from "./weapons/shotguns/rack9";
import M2187 from "./weapons/shotguns/m2187";
import OSA from "./weapons/classic/osa";
import MacTav45 from "./weapons/classic/mactav45";
import TF141 from "./weapons/classic/tf141";
import M1 from "./weapons/classic/m1";
import SRavage from "./weapons/classic/sravage";
import Hornet from "./weapons/classic/hornet";
import EMC from "./weapons/handguns/emc";
import Kendall44 from "./weapons/handguns/kendall44";
import Oni from "./weapons/handguns/oni";
import Hailstorm from "./weapons/handguns/hailstorm";
import UDM from "./weapons/handguns/udm";
import Stallion44 from "./weapons/handguns/stallion44";

export default class User {

    private static data: any;

    private static getDefaultData(): any {
        const data: any = {};
        ['NV4', 'R3K', 'KBAR-32', 'Type-2', 'Volk', 'R-VN', 'X-Eon', 'G-Rail', 'OSA'].forEach(weapon => {
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
        ['Erad', 'FHR-40', 'Karma-45', 'RPR Evo', 'HVR', 'VPR', 'Trencher', 'Raijin-EMX', 'MacTav-45'].forEach(weapon => {
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
                kills: 200,
                headshots: 12,
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
                kills: 15,
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
                kills: 200,
                headshots: 160,
                pointBlank: 20,
                noPrimary: 10,
                allAttachments: 0,
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
                new RaijinEMX(),

                new RAW(),
                new Mauler(),
                new Titan(),
                new Auger(),
                new Atlas(),

                new KBSLongbow(),
                new EBR800(),
                new Widowmaker(),
                new DMR1(),
                new Trek50(),
                new Proteus(),

                new Reaver(),
                new Banshee(),
                new DCM8(),
                new Rack9(),
                new M2187(),
                
                new OSA(),
                new MacTav45(),
                new TF141(),
                new M1(),
                new SRavage(),
                new Hornet(),
                
                new EMC(),
                new Oni(),
                new Kendall44(),
                new Hailstorm(),
                new UDM(),
                new Stallion44(),
            ];
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