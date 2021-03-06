import * as React from "react";
import IWLogo from "../../iw_logo";
import User from "../../../user";
import Weapon from "../../../weapons/weapon";
import ArrowBack from "../../arrowBack";

export default class WeaponFactsPage extends React.Component<any, any> {

    private weapon: Weapon;

    constructor(props: any) {
        super(props);

        const weaponName = this.props.match.params.weapon.toLowerCase();
        const weaponClass = this.props.match.params.weaponclass.toLowerCase();
        const weapons = User.getWeapons();
        let i = 0;
        while (i < weapons.length && !this.weapon) {
            var w = weapons[i];
            if (w.getLink() === '/' + weaponClass + '/' + weaponName) {
                this.weapon = w;
            }
            i++;
        }

        this.renderManufacturer = this.renderManufacturer.bind(this);
    }

    private renderManufacturer() {
        if (!this.weapon.manufacturer) {
            return (<div></div>);
        }
        else {
            if (['kb', 'sdf', 'edi'].includes(this.weapon.manufacturer)) {
                return (
                    <div className='weaponfacts-header-manufacturer--img'>
                        <img src={'resources/img/manufacturers/' + this.weapon.manufacturer + '.png'} />
                    </div>
                );
            }
            else {
                return (
                    <div className='weaponfacts-header-manufacturer--txt'>
                        <span>{this.weapon.manufacturer}</span>
                    </div>
                );
            }
        }
    }

    public render() {
        return (
            <div className='weaponfacts-main'>

                <ArrowBack linkTo={this.weapon.getLink()} />
                <IWLogo />

                <div className='weaponfacts-content'>
                    <div className='weaponfacts-header'>
                        <div className='weaponfacts-name'>
                            <span>{this.weapon.name}</span>
                            <div className='weaponfacts-firemodes'>
                                {
                                    this.weapon.fireModes.map(f => {
                                        return (
                                            <div className='weaponfacts-firemode' key={f[0]}>
                                                <img src={'resources/img/firemodes/' + f[0] + '.png'} />
                                                <span>{f[1]}</span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            {this.renderManufacturer()}
                        </div>
                        <div className='weaponfacts-class'>
                            <span>{this.weapon.weaponClass}</span>
                        </div>
                    </div>
                    <div className='weaponfacts-content-main'>
                        <div className='weaponfacts-facts'>
                            {
                                this.weapon.facts.map(f => {
                                    return (
                                        <div className='weaponfacts-fact' key={f.name}>
                                            <div className='weaponfacts-fact-name'>
                                                <span>{f.name}</span>
                                            </div>
                                            <div className='weaponfacts-fact-value'>
                                                <span>{f.value}</span>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className='weaponfacts-weapon'>
                            <img src={this.weapon.img} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
