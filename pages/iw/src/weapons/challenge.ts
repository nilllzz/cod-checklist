import Weapon from "./weapon";
import User from "../user";

export default class Challenge {

    public weapon: Weapon;
    public challengeName: string;
    public camoName: string;
    public valueName: string;
    public targetValue: number;
    public requiredChallenges: Challenge[];

    public constructor(weapon: Weapon, challengeName: string, camoName: string, valueName: string, targetValue: number, requiredChallenges: Challenge[]) {
        this.weapon = weapon;
        this.challengeName = challengeName;
        this.camoName = camoName;
        this.valueName = valueName;
        this.targetValue = targetValue;
        this.requiredChallenges = requiredChallenges;
    }

    public getCurrentValue(): number {
        const data = this.weapon.getData();
        return data[this.valueName];
    }

    public setCurrentValue(value: number): void {
        User.setWeaponChallengeValue(this, value);
    }

    public isActive() {
        for (var i = 0; i < this.requiredChallenges.length; i++) {
            var challenge = this.requiredChallenges[i];
            if (!challenge.isBeaten())
                return false;
        }
        return true;
    }

    public isBeaten() {
        if (!this.isActive())
            return false;
        const currentValue = this.getCurrentValue();
        return currentValue >= this.targetValue;
    }

    public getCompletion(): number {
        if (!this.isActive())
            return 0;

        const currentValue = this.getCurrentValue();
        let completion = currentValue / this.targetValue;
        if (completion > 1) {
            completion = 1;
        }
        return completion;
    }

    public getText(): string {
        let text = '';
        switch (this.valueName) {
            case 'kills':
                text = 'Get * kills with this weapon';
                break;
            case 'headshots':
                text = 'Get * headshots with this weapon';
                break;
            case 'longshots':
                text = 'Get * longshots with this weapon';
                break;
            case 'optic':
                text = 'Get * kills while aiming down sights and using an optic';
                break;
            case 'noAttachments':
                text = 'Get * kills with this weapon with no attachments equipped';
                break;
            case 'rapid':
                text = 'Get two rapid kills * times with this weapon';
                break;
            case 'threeKills':
                text = 'Use this weapon to kill 3 enemies without dying * times';
                break;
            case 'hipshots':
                text = 'Get * hipfire kills with this weapon';
                break;
            case 'pointBlank':
                text = 'Get * pointblank kills with this weapon';
                break;
            case 'slide':
                text = 'Get * kills with this weapon while sliding';
                break;
            case 'last15':
                text = 'Get a kill with the last 15% of a magazine * times';
                break;
            case 'allAttachments':
                text = 'Get a kill with an optic and 5 attachments equipped 50 times';
                break;
            case 'holdBreath':
                text = 'Get * kills with this weapon while holding your breath';
                break;
            case 'scorestreakKills':
                text = 'Destroy * scorestreaks';
                break;
            case 'scorestreakScore':
                text = 'Destroy * points worth of scorestreaks';
                break;
            case 'noLock':
                text = 'Destroy * scorestreaks without locking on';
                break;
            case 'doubleKills':
                text = 'Kill 2 scorestreaks within a short period of time * times';
                break;
            case 'threePerMatch':
                text = 'Destroy 3 scorestreaks in a single match * times';
                break;
            case 'streakAndEnemy':
                text = 'Destroy a scorestreak and kill an enemy in the same life * times';
                break;
            case 'directImpact':
                text = 'Get * direct impact kills with this weapon';
                break;
            case 'backStab':
                text = 'Kill * enemies from behind';
                break;
            case 'frontKills':
                text = 'Kill * enemies from the front';
                break;
            case 'noPrimary':
                text = 'Kill * enemies while you have no primary weapon';
                break;
        }
        text = text.replace('*', this.targetValue.toString());
        return text;
    }

}