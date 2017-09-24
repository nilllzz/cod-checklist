import * as React from "react";
import Weapon from "../../../weapons/weapon";
import IWButton from "../../iw_button";
import ProgressBar from "../../progress_bar";
import { Link } from "react-router-dom";

interface IWeaponBoxProps {

    weapon: Weapon;

}

export default class WeaponBox extends React.Component<IWeaponBoxProps, any> {

    public constructor(props: IWeaponBoxProps) {
        super(props);
    }

    public render() {
        return (
            <div className='weapon-box' key={this.props.weapon.name}>
                <Link to={this.props.weapon.getLink()}>
                    <IWButton width={300} text={this.props.weapon.name} />
                </Link>
                <img className='weapon-box-img' src={this.props.weapon.img} />
                <ProgressBar width={300} value={this.props.weapon.getCompletion()} />
            </div>
        );
    }

}