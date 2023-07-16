import {Requirement} from "@/igt-library/tools/requirements/Requirement";
import {KeyEventType} from "@/igt-library/tools/hotkeys/KeyEventType";
import {NoRequirement} from "@/igt-library/tools/requirements/NoRequirement";

export class KeyBind {
    keys: string | string[];
    description: string;
    callback: () => void;
    requirement: Requirement;
    eventType: KeyEventType;

    /**
     * @param keys Can be any string that is accepted by Mousetrap (https://craig.is/killing/mice)
     * @param description
     * @param callback
     * @param requirement
     * @param eventType
     */
    constructor(keys: string | string[], description: string, callback: () => void, requirement: Requirement = new NoRequirement(), eventType: KeyEventType = KeyEventType.KeyDown) {
        this.keys = keys;
        this.description = description;
        this.callback = callback;
        this.requirement = requirement;
        this.eventType = eventType;
    }
}
