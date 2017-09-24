import Weapon from "./weapon";

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

}