import Challenge from "../challenge";
import Weapon, { WeaponFact } from "../weapon";
import Melee from "./melee";

export default class CombatKnife extends Melee {

    constructor() {
        super(
            'Combat Knife',
            'combatknife.png',
            'CQC tactical knife. Standard military issue, employed for fast, quiet, and deadly wetwork.',
        );

        this.facts.push(new WeaponFact('Used by', 'Nick Reyes'));
    }

}
