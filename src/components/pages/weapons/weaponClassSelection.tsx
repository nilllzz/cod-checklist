import * as React from "react";
import IWButton from "../../iw_button";
import Title from "../../title";
import Weapon from "../../../weapons/weapon";
import { Link } from 'react-router-dom';

export default class WeaponClassSelection extends React.Component<any, any> {

    private static getWeaponClassLink(weaponClass: string): string {
        return '/weapons/' + weaponClass.replace(' ', '').toLowerCase();
    }

    public render() {
        return (
            <div className='weapons-class-selection-main'>
                <div className='weapons-class-selection-text'>
                    <span>Select a weapon class</span>
                </div>
                <div className='weapons-class-selection-options'>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.ARs)}>
                        <IWButton text='Assault Rifles' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.SMGs)}>
                        <IWButton text='Submachine Guns' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.LMGs)}>
                        <IWButton text='Light Machine Guns' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Snipers)}>
                        <IWButton text='Sniper Rifles' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Shotguns)}>
                        <IWButton text='Shotguns' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Handguns)}>
                        <IWButton text='Handguns' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Launchers)}>
                        <IWButton text='Launchers' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Melee)}>
                        <IWButton text='Melee' />
                    </Link>
                    <Link to={WeaponClassSelection.getWeaponClassLink(Weapon.WeaponClass.Classic)}>
                        <IWButton text='Classic' />
                    </Link>
                </div>
            </div>
        );
    }

}