import * as React from "react";
import IWButton from "../../iw_button";

export default class WeaponClassSelection extends React.Component<any, any> {

    public render() {
        return (
            <div className='weapons-class-selection-main'>
                <div className='weapons-class-selection-text'>
                    <span>
                        Select a weapon class below to inspect weapons.
                    </span>
                </div>
                <div className='weapons-class-selection-options'>
                    <IWButton text='Assault Rifles' />
                    <IWButton text='Submachine Guns' />
                    <IWButton text='Light Machine Guns' />
                    <IWButton text='Sniper Rifles' />
                    <IWButton text='Shotguns' />
                    <IWButton text='Handguns' />
                    <IWButton text='Launchers' />
                    <IWButton text='Melee' />
                    <IWButton text='Classic' />
                </div>
            </div>
        );
    }

}