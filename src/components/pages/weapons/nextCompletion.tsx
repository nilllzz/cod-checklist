import * as React from "react";
import User from "../../../user";
import Weapon from "../../../weapons/weapon";
import IWButton from "../../iw_button";
import ProgressBar from "../../progress_bar";
import WeaponBox from "./weaponBox";
import Title from "../../title";

interface INextCompletionState {
    weapons: Weapon[];
}

export default class NextCompletion extends React.Component<any, INextCompletionState> {

    public constructor(props: any) {
        super(props);

        const weapons: Weapon[] = [];
        User.getWeapons().reverse().forEach(w => {
            if (w.getCompletion() < 100) {
                weapons.push(w);
            }
        });
        weapons.sort((w1, w2) => w1.getCompletion() - w2.getCompletion()).reverse();
        while (weapons.length > 3)  {
            weapons.pop();
        }
        this.state = {
            weapons: weapons
        };
    }

    public render() {
        return (
            <div className='weapons-nextcompletion-main'>

                <div className='weapons-nextcompletion-text'>
                    <span>Weapons closest to completion</span>
                </div>

                <div className='weapons-nextcompletion-weapons'>
                    {
                        this.state.weapons.map(w => {
                            return (
                                <WeaponBox weapon={w} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

}