import NV4 from "./assaultRifles/nv4";
import R3K from "./assaultRifles/r3k";
import KBAR32 from "./assaultRifles/kbar32";
import Type2 from "./assaultRifles/type2";
import Volk from "./assaultRifles/volk";
import RVN from "./assaultRifles/rvn";
import Xeon from "./assaultRifles/xeon";
import GRail from "./assaultRifles/grail";
import Erad from "./submachineguns/erad";
import FHR40 from "./submachineguns/fhr40";
import Karma45 from "./submachineguns/karma45";
import RPREvo from "./submachineguns/rprevo";
import HVR from "./submachineguns/hvr";
import VPR from "./submachineguns/vpr";
import Trencher from "./submachineguns/trencher";
import RaijinEMX from "./submachineguns/raijinemx";
import RAW from "./lightMachineGuns/raw";
import Mauler from "./lightMachineGuns/mauler";
import Titan from "./lightMachineGuns/titan";
import Auger from "./lightMachineGuns/auger";
import Atlas from "./lightMachineGuns/atlas";
import KBSLongbow from "./snipers/kbslongbow";
import EBR800 from "./snipers/ebr800";
import Widowmaker from "./snipers/widowmaker";
import Trek50 from "./snipers/trek50";
import Proteus from "./snipers/proteus";
import DMR1 from "./snipers/dmr1";
import Reaver from "./shotguns/reaver";
import Banshee from "./shotguns/banshee";
import DCM8 from "./shotguns/dcm8";
import Rack9 from "./shotguns/rack9";
import M2187 from "./shotguns/m2187";
import OSA from "./classic/osa";
import MacTav45 from "./classic/mactav45";
import TF141 from "./classic/tf141";
import M1 from "./classic/m1";
import SRavage from "./classic/sravage";
import Hornet from "./classic/hornet";
import EMC from "./handguns/emc";
import Kendall44 from "./handguns/kendall44";
import Oni from "./handguns/oni";
import Hailstorm from "./handguns/hailstorm";
import UDM from "./handguns/udm";
import Stallion44 from "./handguns/stallion44";
import SpartanSA3 from "./launchers/spartansa3";
import PLAW from "./launchers/plaw";
import Howitzer from "./launchers/howitzer";
import CombatKnife from "./melee/combatknife";
import Weapon from "./weapon";

export default class WeaponProvider {

    public static getWeapons(): Weapon[] {
        return [
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
            new SRavage(),
            new M1(),
            new Hornet(),

            new EMC(),
            new Oni(),
            new Kendall44(),
            new Hailstorm(),
            new UDM(),
            new Stallion44(),

            new SpartanSA3(),
            new PLAW(),
            new Howitzer(),

            new CombatKnife(),
        ];
    }

}