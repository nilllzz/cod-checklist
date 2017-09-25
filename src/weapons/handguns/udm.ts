import Weapon from "../weapon";
import Handgun from "./handgun";

export default class UDM extends Handgun {

    constructor() {
        super(
            'UDM',
            'udm.png',
            'Full-auto ballistic pistol built from modular pieces. This configuration has a slow fire rate but high damage that is effective at longer ranges.',
        );
    }


}