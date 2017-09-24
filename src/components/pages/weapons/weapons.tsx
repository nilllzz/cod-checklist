import * as React from "react";
import IWLogo from "../../iw_logo";
import TotalCompletion from "./totalCompletion";
import WeaponClassSelection from "./weaponClassSelection";
import NextCompletion from "./nextCompletion";

export default class WeaponsPage extends React.Component<any, any> {

    public render() {
        return (
            <div className='weapons-main'>
                <IWLogo />

                <div className='weapons-content'>

                    <div className='weapons-content-main'>
                        <div className='weapons-content-main--left'>
                            <TotalCompletion />
                            <WeaponClassSelection />
                        </div>
                        <div className='weapons-content-main--right'>
                            <NextCompletion />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}